import React        from 'react'
import Text         from './_examples/SourceText.jsx'
import TextSrc      from './_examples/SourceText.jsx?raw'
import Load         from './_examples/SourceLoad.jsx'
import LoadSrc      from './_examples/SourceLoad.jsx?raw'
import Caption      from './_examples/SourceCaption.jsx'
import CaptionSrc   from './_examples/SourceCaption.jsx?raw'
import Highlight    from './_examples/SourceHighlight.jsx'
import HighlightSrc from './_examples/SourceHighlight.jsx?raw'
import Undent       from './_examples/SourceUndent.jsx'
import UndentSrc    from './_examples/SourceUndent.jsx?raw'
import Source       from '@/code/Source.jsx'
import Example      from '@/code/Example.jsx'
import Link         from '@/ui/Link.jsx'
import { distinct } from '@/utils/Filter.jsx'
import { LANGUAGE_EXTENSIONS } from '@/src/index.jsx'

const SourceCode = () =>
  <div>
    <h1 className="font-mono">Source</h1>
    <p>
      The <code>Source</code> component can be used to render source code
      with syntax highlighting.
    </p>
    <Example
      Component={Text}
      code={TextSrc}
    />
    <h2 className="font-mono">code</h2>
    <p>
      The <code>code</code> property should be set to the source code you
      want to display.  Vite allows you to import raw text from a file by
      adding the <code>?raw</code> extension to an import filename.
      Note that the <code>_examples</code> directory is ignored by the{' '}
      <Link to="/configuration/pages" code="pages"/> router so it&apos;s a
      good place to put examples.
    </p>
    <Example
      Component={Load}
      code={LoadSrc}
    />

    <h2 className="font-mono">language</h2>
    <p>
      The <code>language</code>property should be used to define the
      language for the correct syntax highlighting to be applied.
      The supported languages are shown below.
    </p>
    <table className="shaded striped celled">
      <thead>
        <tr>
          <th>Language</th>
        </tr>
      </thead>
      <tbody>
        { Object.values(LANGUAGE_EXTENSIONS).filter( distinct() ).map(
          language =>
            <tr key={language}>
              <td className="font-mono">{language}</td>
            </tr>
        )}
      </tbody>
    </table>

    <h2 className="font-mono">caption</h2>
    <p>
      The <code>caption</code> property allows you to add a caption to the
      source code.
    </p>
    <Example
      Component={Caption}
      code={CaptionSrc}
    />

    <h2 className="font-mono">highlightLines</h2>
    <p>
      The <code>highlightLines</code> property allows you to highlight one
      or more lines or ranges of lines.  A single line is represented by a
      number, e.g. <code>3</code>.  A range of lines is represented by a
      hyphenated pair of the start and end lines, e.g. <code>6-7</code>.
      Multiple lines or lines ranges should be separated by commas,
      e.g. <code>3,6-7</code>.
    </p>
    <Example
      Component={Highlight}
      code={HighlightSrc}
    />

    <h2 className="font-mono">undent</h2>
    <p>
      The <code>undent</code> property can be used to remove whitespace from
      the start of lines, effectively un-indenting it.  It should be set to
      the number of spaces you want to remove from the start of each line.
    </p>
    <Example
      Component={Undent}
      code={UndentSrc}
    />

    <h2 className="font-mono">expand</h2>
    <p>
      The default behaviour is to display the first dozen or so lines of
      code along with an &quot;Expand&quot; button to allow the user to
      expand it to view the entire source code.  Add the <code>expand</code>{' '}
      property if you want it expanded by default.
    </p>

    <h2 className="font-mono">raw</h2>
    <p>
      There are some special comment markers that can be added to the source
      code to control what is and isn&apos;t displayed.
    </p>
    <p>
      The <code>raw</code> property can be added to prevent any of the
      this pre-processing from being applied.
    </p>
    <p>
      A <code>{'/* START */'}</code> or <code>{'{/* START */}'}</code> comment
      line can be added to the source to indicate the start of the code that
      you want to display.  Anything before this comment will be ignored.
    </p>
    <p>
      An <code>{'/* END */'}</code> or <code>{'{/* END */}'}</code> comment
      line can be added to the source to indicate the end of the code that
      you want to display.  Anything after this comment will be ignored.
    </p>
    <p>
      A line can be prefixed with a <code>{'// PRETEND: '}</code>{' '}&nbsp;comment.
      The comment will be removed and the remainder of the line will be
      displayed as part of the source code.  This is useful when using the{' '}
      <Link to="/code/example" code="Example"/> component which displays the
      source code of a file and renders the output alongside it.
    </p>
    <p>
      This is shown in the example below.  To make this example work I have
      to import the <code>Source</code> component from{' '}
      <code>@/code/Source.jsx</code>.  But I don&apos;t want to show that
      to users because they need to import it from <code>@abw/badger-website</code>{' '}
      instead.
      So I add a <code>{'/* START */'}</code> comment on line 2 so that line 1
      isn&apos;t displayed.  I then add a <code>{'// PRETEND: '}</code> comment
      to line 4 to show them what I want them to see.  As far as Javascript/React
      is concerned, lines 2 and 4 are ignored because they&apos;re commented
      out. But when the source code is displayed we see that lines 3 and 4
      in the raw source appear to be lines 1 and 2 in the processed output.
    </p>

    <div className="grid-2 gap-8 stack-tablet">
      <div>
        <h4 className="mar-v-1 weight-500">Raw Source</h4>
        <Source
          code={TextSrc}
          highlightLines="2,4"
          expand
          raw
        />
      </div>
      <div>
        <h4 className="mar-v-1 weight-500">Processed Output</h4>
        <Source
          code={TextSrc}
          highlightLines="2"
          expand
        />
      </div>
    </div>

  </div>

export default SourceCode