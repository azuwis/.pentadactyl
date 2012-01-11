
/* *******************************************************************************
 *
 * This is a Pentadactyl plugin; for more on Pentadactyl, see here:
 * http://dactyl.sourceforge.net/pentadactyl/
 *
 * This plugin implements commands for making long jumps backwards and forwards
 * in a tab's history.  These commands are similar to the builtin :back and
 * :forward commands, except that they jump over sequences of pages within the
 * same domain.
 *
 * This plugin also provides a command :long-jump-menu, which offers s menu of
 * jump points to return to within the current tab's history.
 *
 * See the documentation for more information.
 *
 * Installation:
 *    - place this file in "~/.pentadactyl/plugins/"; that's it.
 *
 * Copyright:
 *    Stephen Blott (smblott@gmail.com)
 *
 * License:
 *    MIT License
 *    http://opensource.org/licenses/mit-license.php
 */

/* *******************************************************************************
 *
 * TODO:
 *    - hmmm, there must be something to add?
 *
 * Version 0.11:
 *    - Released: 2011/4/7
 *    - added :long_jump_menu command; this offers a menu of jump points within
 *      the current tab's browsing history
 *    - added :long-jump-start and :long-jump-end; these jump to the start and
 *      end, respectively, of the current tab's browsing history
 *    - improved documentation
 *    - fix a silly bug in the initial release (this being result of a last
 *      minute change); if the initial domain sequence contained just one tab,
 *      then :long-jump-back skipped over the second last entry point; never mind,
 *      it's fixed now
 *
 * Version 0.10:
 *    - Released: 2011/4/6
 *    - This plugin implements two commands for making long jumps backwards and
 *      forwards in a tab's history.  These commands are similar to the builtin
 *      :back and :forward commands, except that they jump over sequences of
 *      pages within the same domain.
 *
 *      For example, say you google something and then click through to the
 *      pages at www.something.com.  After much poking around, it may take many
 *      :back operations to return to the entry page on www.something.com, and
 *      then one more to return to Google.  In this situation, :long-jump-back
 *      jumps directly back to the entry page on www.something.com, from where
 *      the :back command takes you back to Google, or a further
 *      :long-jump-back would take you back to the entry page on Google.
 */

/* *******************************************************************************
 * some preliminaries ...
 */

/* use strict */

XML.ignoreWhitespace = false;
XML.prettyPrinting   = false;

/* *******************************************************************************
 * the main jump commands ...
 */

var domain =
    function (uri)
    {
        if ( uri )
        {
            var cnt = 0;
            for (var i=0; i<uri.length; i+=1)
                if ( uri.charAt(i) == "/" )
                    if ( ++cnt == 3 )
                        return uri.substr(0,i);
        }
        return uri;
    };

var long_jump_back =
    function (args)
    {
        var sh  = history.session;
        var ind = sh.index;

        if ( ind == 0 )
        {
            dactyl.beep();
            return;
        }

        var reference_domain = domain(sh[ind-1].URI.spec);

        for (var i=ind-2; 0<=i; i-=1)
            if ( domain(sh[i].URI.spec) != reference_domain )
            {
                try
                {
                    window.getWebNavigation().gotoIndex(i+1);
                    return;
                }
                catch (e) {} // apparently: we get NS_ERROR_FILE_NOT_FOUND if files in history don't exist
            }

        history.goToStart();
    };

var long_jump_forward =
    function (args)
    {
        var sh  = history.session;
        var ind = sh.index;

        if ( ind == sh.length - 1 )
        {
            dactyl.beep();
            return;
        }

        var reference_domain = domain(sh[ind].URI.spec);

        for (var i=ind+1; i<sh.length; i+=1)
            if ( domain(sh[i].URI.spec) != reference_domain )
            {
                try
                {
                    window.getWebNavigation().gotoIndex(i);
                    return;
                }
                catch (e) {} // apparently: we get NS_ERROR_FILE_NOT_FOUND if files in history don't exist
            }

        history.goToEnd();
    };

var long_jump_start =
    function (args)
    {
        history.goToStart();
    };

var long_jump_end =
    function (args)
    {
        history.goToEnd();
    };

group.commands.add( [ "long-jump-back", "ljb" ],
                    "Make a long jump back in the tab's history.",
                    long_jump_back,
                    { argCount: "0" },
                    true );

group.commands.add( [ "long-jump-forward", "ljf" ],
                    "Make a long jump forward in the tab's history.",
                    long_jump_forward,
                    { argCount: "0" },
                    true );

group.commands.add( [ "long-jump-start", "ljs" ],
                    "Make a long jump to the start of the tab's history.",
                    long_jump_start,
                    { argCount: "0" },
                    true );

group.commands.add( [ "long-jump-end", "lje" ],
                    "Make a long jump to the end of the tab's history.",
                    long_jump_end,
                    { argCount: "0" },
                    true );

/* *******************************************************************************
 * the jump menu ...
 */

var title = [       "ENTRY POINT",        "URI" ];
var keys  = { text: "index", description: "uri" };

var available_long_jumps =
    function ()
    {
        var ref = "<--UNDEFINED-->";
        var ind = 1; // start at 1, see XX below

        return history.session
                .filter
                (
                    function (e)
                    {
                        e["_lj_index"] = ind++;

                        if ( e["_lj_domain"] == undefined )
                            e["_lj_domain"] = domain(e.URI.spec);

                        if ( e["_lj_domain"] == ref )
                            return false;

                        ref = e["_lj_domain"];
                        return true;
                    }
                )
                .map
                (
                    function (e)
                    {
                        return { "index": e["_lj_index"] + "--" + e["_lj_domain"],
                                 "uri": e.URI.spec };
                    }
                );
    };

var long_jump_completer =
    function (context)
    {
        context.message     = "Long jumps entries:",
        context.title       = title;
        context.keys        = keys;
        context.completions = available_long_jumps();
        context.anchored    = false;
        return context;
    };

var long_jump_menu =
    function (args)
    {
        if ( /^(\d+)$/.test(args[0].split("--")[0]) )
        {
            var index = RegExp.$1 - 1; // subtract off 1, see XX above
            if ( index < 0 || history.session.length <= index )
                dactyl.echoerr("Invalid long jump index.");
            else
                window.getWebNavigation().gotoIndex( index );
        }
        else
            dactyl.echoerr("Invalid long jump (perhaps you forgot to hit TAB?).");
    };

group.commands.add( [ "long-jump-menu", "ljm" ],
                    "Select from a list of long jumps in the current tab.",
                    long_jump_menu,
                    { argCount: "1", completer: long_jump_completer },
                    true );

/* *******************************************************************************
 * END OF MAIN IMPLEMENTATION
 *
 * documentation ...
 */

var INFO =
    <plugin name="longjump" version="0.10"
            href="http://code.google.com/p/dactyl/issues/detail?id=495"
            summary="Make long jumps back/forward in tab's history."
            xmlns={NS}>
        <author email="smblott@gmail.com">Stephen Blott</author>
        <license href="http://opensource.org/licenses/mit-license.php">MIT</license>
        <project name="Pentadactyl" min-version="1.0"/>

        <p>
            This plugin implements commands for making long jumps backwards
            and forwards in a tab's history.  These commands are similar to
            the builtin <ex>:back</ex> and <ex>:forward</ex> commands, except
            that they jump over sequences of pages within the same
            domain.
        </p>
        
        <p>

            For example, say you google <tt>something</tt> and then click
            through to the pages at <tt>www.something.com</tt>.  After much
            poking around, it may take many slow <ex>:back</ex> operations to
            return to the entry page on <tt>www.something.com</tt>, and then
            one more to return to Google.  In this situation,
            <ex>:long-jump-back</ex> jumps directly back to the entry page on
            <tt>www.something.com</tt>, from where the <ex>:back</ex> command
            takes you back to Google, or a further <ex>:long-jump-back</ex>
            would take you back to the entry page on Google.
        </p>

        <item>
            <tags>:ljb :long-jump-back</tags>
            <spec>:long-jump-back</spec>
            <description>
                <p>
                    Make a long jump backwards in the tab's history,
                    jumping over pages within the same domain.
                </p>
                <p>
                    <ex>:long-jump-back</ex> always jumps to a page that is the
                    start of a sequence of pages (possibly of length 1)
                    visiting a single domain.
                </p>
            </description>
        </item>

        <item>
            <tags>:ljf :long-jump-forward</tags>
            <spec>:long-jump-forward</spec>
            <description>
                <p>
                    Make a long jump forwards in the tab's history,
                    jumping over pages within the same domain.
                </p>
                <p>
                    <ex>:long-jump-forward</ex> always jumps to a page that is the
                    start of a sequence of pages (possibly of length 1)
                    visiting a single domain, except when leaving the final such
                    sequence from which it jumps to the very last page of the
                    tab's browsing history.
                </p>
            </description>
        </item>

        <item>
            <tags>:ljm :long-jump-menu</tags>
            <spec>:long-jump-menu</spec>
            <description>
                <p>
                    Present a menu of long jump entry points for selection.
                    Each such entry point is at the start of a sequence of
                    pages visiting a single domain.
                </p>
            </description>
        </item>

        <p>
            The definition of a "domain" here is as follows.  That part of a
            URI from its start and up to its third "/" is
            considered to be the URI's domain.  URIs are considered to be from
            different domains only if they differ in their domain under this
            definition.
        </p>

        <item>
            <tags>:ljs :long-jump-start</tags>
            <spec>:long-jump-start</spec>
            <description>
                <p>
                Make a long jump to the start of the current tab's browsing history.
                </p>
            </description>
        </item>

        <item>
            <tags>:lje :long-jump-end</tags>
            <spec>:long-jump-end</spec>
            <description>
                <p>
                Make a long jump to the end of the current tab's browsing history.
                </p>
            </description>
        </item>

    </plugin>;

/* vim:se sts=4 sw=4 et: */

