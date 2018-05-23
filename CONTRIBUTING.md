**Language/ Sprache:**<br/>
[English/ Englisch](#English)
[Deutsch/ German](#Deutsch) :warning: **Die deutsche Contributing Guide wird nicht so aktiv geführt wie die Englische!**

# English
<!-- Guide: https://mozillascience.github.io/working-open-workshop/contributing/ -->
## Code Style Guide
In this project the code style of [Google](https://google.github.io/styleguide/cppguide.html) is used.

## Tags/ Version
A label should always be structured according to the following scheme:      
**v[VERSION](#Version Number)** 
Example:
```
v1.4.2-RC
```

## Version Number
```
v2.3.5-ALPHA
 | | | └────── evtl. Addition
 │ │ └──────── Patch Level     
 │ └────────── Minornumber 
 └──────────── Majornumber
```

### Major
Indexes extremely significant changes to the program - for example, if the program has been completely rewritten (for example, GIMP 2. x after version 1. x) or if interface compatibility cannot be maintained for libraries.

### Minor
Refers to the functional extension of the program.    
e. g. When a new function has been added.

### Patch Level
Contains bug fixes.

### Build
Indicates the progress of the development work in single steps, i. e. starting with 0001, it is incremented by one, starting with every compilation of the code.  Version 5.0.0.0-3242 stands for the 3242th compilation product of a software.  If version control systems are used, instead of the build number, a number is often used which uniquely identifies the sources for compilation within the version control system.  This makes it easier to find the corresponding sources in case of an error.
The build number also shows how many commits have passed since the last day. Set automatically by the build system.

### Revision
The revision number represents the number of all existing commits in the current branch. Set automatically by the build system.

### Addition
Please use the following Additions:    
**ALPHA**: during software development, very early stage     
**BETA**:  intended for testing, limited number of users    
**RC**:    Publishing candidate, final test version    
Please do not use an Addition for (Final) Release or Patch!

## Change important files
If important files (such as [CONTRIBUTING.md][],[README.md][],[LICENSE][],[CHANGELOG.md][], etc.) are changed **the commit must be signed**!

## Make a Release
Please read first about [Version Number](#Version Number).<br/>
The Git Flow model is used.<br/>
Further information: [Git Flow Branching Model][]<br/>

## Pull Request
For a pull request to be accepted, it must be ensured that the processed program code is well documented!<br/>
To improve the readability of the commit, they should be "created" with the following scheme (title):<br/>
A <bold>*</bold> for a change. (Example: ````* Edited README````)_<br/>
A <bold>+</bold> for a new file. (Example: ````+ Added File `'src/health.cpp'````)_<br/>
A <bold>-</bold> for removing a file. (Example: ```- Removed File 'include/health_old.h'````)_<br/>
A <bold>!</bold> for important information. (Example: ```! Fixed Merge Request Error````)_<br/>
<br/>
The "content" of the commit should then be continued with the same scheme, but much more Details.

## Commit Messages

### The seven rules of a great Git commit message
1. Separate subject from body with a blank line
2. Limit the subject line to 50 characters
3. Capitalize the subject line
4. Do not end the subject line with a period
5. Use the imperative mood in the subject line
6. Wrap the body at 72 characters
7. Use the body to explain **what** and **why** vs. **how**

**Example:**
```
Summarize changes in around 50 characters or less

More detailed explanatory text, if necessary. Wrap it to about 72
characters or so. In some contexts, the first line is treated as the
subject of the commit and the rest of the text as the body. The
blank line separating the summary from the body is critical (unless
you omit the body entirely); various tools like `log`, `shortlog`
and `rebase` can get confused if you run the two together.

Explain the problem that this commit is solving. Focus on why you
are making this change as opposed to how (the code explains that).
Are there side effects or other unintuitive consequences of this
change? Here's the place to explain them.

Further paragraphs come after blank lines.

 - Bullet points are okay, too

 - Typically a hyphen or asterisk is used for the bullet, preceded
   by a single space, with blank lines in between, but conventions
   vary here

If you use an issue tracker, put references to them at the bottom,
like this:

Resolves: #123
See also: #456, #789
```

#### 1. Separate subject from body with a blank line
From the `git commit` [manpage](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/git-commit.html#_discussion):
> Though not required, it’s a good idea to begin the commit message with a single short (less than 50 character) line summarizing the change, followed by a blank line and then a more thorough description. The text up to the first blank line in a commit message is treated as the commit title, and that title is used throughout Git. For example, Git-format-patch(1) turns a commit into email, and it uses the title on the Subject line and the rest of the commit in the body.

Not every Commit does requires both a subject and a body. 
Sometimes a single line is fine, especially when the change is so simple that no further context is necessary. 
For example:
```
Fix typo in introduction to user guide
```

Nothing more need be said; 
if the reader wonders what the typo was, she can simply take a look at 
the change itself, i.e. use `git show` or `git diff` or `git log -p`.

When a commit merits a bit of explanation and context, you need to write a body. 
For example:
```
Derezz the master control program

MCP turned out to be evil and had become intent on world domination.
This commit throws Tron's disc into MCP (causing its deresolution)
and turns it back into a chess game.
```

#### 2. Limit the subject line to 50 characters
Keeping subject lines at this length ensures that they are readable, 
and forces the author to think for a moment about the most concise way to explain what’s going on.
> Tip: If you’re having a hard time summarizing, you might be committing too many changes at once. 
Strive for [atomic commits](https://www.freshconsulting.com/atomic-commits/) (a topic for a separate post).

#### 3. Capitalize the subject line
Begin all subject lines with a capital letter.<br>
<br>
For example:
* <span style="color:green">Accelerate to 88 miles per hour</span>
<br>
Instead of:
* <span style="color:red">accelerate to 88 miles per hour</span>

#### 4. Do not end the subject line with a period
Trailing punctuation is unnecessary in subject lines. 
Besides, space is precious when you’re trying to keep them to [50 chars](#2. Limit the subject line to 50 characters) or less.
<br>
For example:
* <span style="color:green">Open the pod bay doors</span>
<br>
Instead of:
* <span style="color:red">Open the pod bay doors.</span>

#### 5. Use the imperative mood in the subject line
Imperative mood just means "spoken or written as if giving a command or instruction". 
A few examples:
- Clean your room
- Close the door
- Take out the trash
<br>
Each of the seven rules you’re reading about right now are written in the imperative ("Wrap the body at 72 characters", etc.).
<br>
The imperative can sound a little rude; that’s why we don’t often use it. But it’s perfect for Git commit subject lines. 
One reason for this is that **Git itself uses the imperative whenever it creates a commit on your behalf**.
<br>
For example, the default message created when using `git merge` reads:
```
Merge branch 'myfeature'
```

<br>
And when using `git revert`:
```
Revert "Add the thing with the stuff"

This reverts commit cc87791524aedd593cff5a74532befe7ab69ce9d.
```
<br>

So when you write your commit messages in the imperative, you’re following Git’s own built-in conventions. 
For example:
- <span style="color:green">Refactor subsystem X for readability</span>
- <span style="color:green">Update getting started documentation</span>
- <span style="color:green">Remove deprecated methods</span>
- <span style="color:green">Release version 1.0.0</span>
<br>

Writing this way can be a little awkward at first. 
We’re more used to speaking in the _indicative mood_, which is all about reporting facts. 
That’s why commit messages often end up reading like this:
- <span style="color:red">Fixed bug with Y</span>
- <span style="color:red">Changing behavior of X</span>

And sometimes commit messages get written as a description of their contents:
- <span style="color:red">More fixes for broken stuff</span>
- <span style="color:red">Sweet new API methods</span>
<br>

To remove any confusion, here’s a simple rule to get it right every time.
<br>

**A properly formed Git commit subject line should always be able to complete the following sentence:**
- If applied, this commit will <u>your subject line here</u>

For example:
- If applied, this commit will <span style="color:green">refactor subsystem X for readability</span>
- If applied, this commit will <span style="color:green">update getting started documentation</span>
- If applied, this commit will <span style="color:green">remove deprecated methods</span>
- If applied, this commit will <span style="color:green">release version 1.0.0</span>
- If applied, this commit will <span style="color:green">merge pull request #123 from user/branch</span>
<br>

Notice how this doesn’t work for the other non-imperative forms:
- If applied, this commit will <span style="color:red">fixed bug with Y</span>
- If applied, this commit will <span style="color:red">changing behavior of X</span>
- If applied, this commit will <span style="color:red">more fixes for broken stuff</span>
- If applied, this commit will <span style="color:red">sweet new API methods</span>
<br>

> Remember: Use of the imperative is important only in the subject line. You can relax this restriction when you’re writing the body.

#### 6. Wrap the body at 72 characters
Git never wraps text automatically. 
When you write the body of a commit message, you must mind its right margin, and wrap text manually.
<br>
The recommendation is to do this at 72 characters, 
so that Git has plenty of room to indent text while still keeping everything under 80 characters overall.
<br>
A good text editor can help here. 
It’s easy to configure Vim, for example, to wrap text at 72 characters when you’re writing a Git commit. 
Traditionally, however, IDEs have been terrible at providing smart support for text wrapping in commit messages 
(although in recent versions, IntelliJ IDEA has `finally` `gotten` `better` about this).

#### 7. Use the body to explain what and why vs. how
This [commit from Bitcoin Core](https://github.com/bitcoin/bitcoin/commit/eb0b56b19017ab5c16c745e6da39c53126924ed6)
is a great example of explaining what changed and why:
```
commit eb0b56b19017ab5c16c745e6da39c53126924ed6
Author: Pieter Wuille <pieter.wuille@gmail.com>
Date:   Fri Aug 1 22:57:55 2014 +0200

   Simplify serialize.h's exception handling

   Remove the 'state' and 'exceptmask' from serialize.h's stream
   implementations, as well as related methods.

   As exceptmask always included 'failbit', and setstate was always
   called with bits = failbit, all it did was immediately raise an
   exception. Get rid of those variables, and replace the setstate
   with direct exception throwing (which also removes some dead
   code).

   As a result, good() is never reached after a failure (there are
   only 2 calls, one of which is in tests), and can just be replaced
   by !eof().

   fail(), clear(n) and exceptions() are just never called. Delete
   them.
```
<br>

In most cases, you can leave out details about how a change has been made. 
Code is generally self-explanatory in this regard (and if the code is so complex that it needs to be explained in prose, 
that’s what source comments are for). Just focus on making clear the reasons why you made the change in the first place—the way 
things worked before the change (and what was wrong with that), the way they work now, and why you decided to solve it the way you did.

[Full Article "How to Write a Git Commit Message"](https://chris.beams.io/posts/git-commit/)

<!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
<!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
<!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->

# Deutsch
<!-- Guide: https://mozillascience.github.io/working-open-workshop/contributing/ -->
## Code Style Leitfaden
In diesem Projekt wir der Code-Style von [Google](https://google.github.io/styleguide/cppguide.html) verwendet.

## Tags/ Version
Ein Tag sollte immer so aufgebaut sein:    
**v[VERSION](#Versions Nummer)**    
Beispiel:
```
v1.4.2-RC
```

## Versions Nummer
Die Versionsnummer ist so aufgebaut:    
```
v2.3.5-ALPHA
 | | | └────── evtl. Addition
 │ │ └──────── Patch Level     
 │ └────────── Minor Nummer 
 └──────────── Major Nummer
```

### Major
Indiziert extrem wichtige Änderungen am Programm - z.B. wenn das Programm komplett neu geschrieben wurde (z.B. GIMP 2. x nach Version 1. x) oder wenn die Schnittstellenkompatibilität für Bibliotheken nicht aufrecht erhalten werden kann.

### Minor
Bezieht sich auf die funktionale Erweiterung des Programms.    
z. B. Wenn eine neue Funktion hinnzugefügt wurde.

### Patch Level
Beinhaltet Fehlerbehebungen.

### Build
Gibt den Fortschritt der Entwicklungsarbeit in Einzelschritten an, d. h. beginnend mit 0001 wird er um eins erhöht, beginnend mit jeder Kompilierung des Codes.  Version 5.0.0.0.0-3242 steht für das 3242. Kompilierungsprodukt einer Software.  Wenn Versionskontrollsysteme verwendet werden, wird anstelle der Build-Nummer häufig eine Nummer verwendet, die die Quellen für die Kompilierung innerhalb des Versionskontrollsystems eindeutig identifiziert.  Dies erleichtert das Auffinden der entsprechenden Quellen im Fehlerfall.
Die Buildnummer gibt auch  wieder wie viele Commit vergangen sind seit dem letzten Tag. Wird automatisch von dem Build System gesetzt.

### Revision
Die Revisions Nummer gibt die Zahl aller exesiterenden Commits im aktuellen Branch wieder.  Wird automatisch von dem Build System gesetzt.

### Addition
Bitte verwenden Sie die folgenden Zusätze:    
**ALPHA**: während der Softwareentwicklung, sehr frühes Stadium     
**BETA**: zum Testen vorgesehen, begrenzte Anzahl von Benutzern    
**RC**: Verlagskandidat, endgültige Testversion    
Bitte verwenden Sie keinen Zusatz für (Final) Release oder Patch!

## Veränderung wichtiger Dateien
Sollten wichtige Dateien (wie z. B. [CONTRIBUTING.md][], [README.md][], [LICENSE][], [CHANGELOG.md][], etc.) geändert werden, **muss** der Commit signiert werden!

## Neue Version (Release)
Bitte lesen Sie zuerst über [Versionsnummer](#Versions Nummer)<br/>
Es wird mit dem Git Flow Modell gearbeitet.<br/>
Weitere Informationen: [Git Flow Branching Model][]<br/>

## Pull Request
Damit ein Pull Request angenomment wird muss sichergestellt sein dass der bearbeitete Programm-Code gut dokumentiert ist!<br/>
Zur verbesserung der Lesbarkeit der Commit sollten diese mit folgendem Schema "erstellt" werden (Title):<br/>
Ein <bold>*</bold> für eine Änderung. _(Beispiel: ```* Edited README```)_<br/>
Ein <bold>+</bold> für eine neue Datei. _(Beispiel: ```+ Added File 'src/health.cpp'```)_<br/>
Ein <bold>-</bold> für das entfernen einer Datei. _(Beispiel: ```- Removed File 'include/health_old.h'```)_<br/>
Ein <bold>!</bold> für eine Wichtige Information. _(Beispiel: ```! Fixed Merge Request Error```)_<br/>
<br/>
Der "Inhalt" des Commits sollte dann mit dem gleichen Schema fortgeführt werden, nur viel Detail reicher.

<!-- ============ -->
[Git Flow Branching Model]: http://nvie.com/posts/a-successful-git-branching-model/
[CONTRIBUTING.md]: CONTRIBUTING.md
[README.md]: README.md
[LICENSE]: LICENSE
[CHANGELOG.md]: CHANGELOG.md