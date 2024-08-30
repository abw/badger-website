import React   from 'react'
import Snippet from '@/code/Snippet.jsx'
import Example from '@/code/Example.jsx'
import Link    from '@/ui/Link.jsx'
import SnippetComp from './_examples/Snippet.jsx'
import SnippetSrc  from './_examples/Snippet.jsx?raw'
import { LANGUAGE_EXTENSIONS } from '@/src/index.jsx'

const CodeSnippets = () =>
  <div>
    <h1>Snippets</h1>
    <p>
      The <code>Snippet</code> component can be used to render snippets of
      code loaded from files.  It uses the{' '}
      <Link to="/code/source" code="Source"/> component to render the source
      code.  The only difference is that it automatically handles the loading
      of the source from a pre-defined directory of snippet files.
    </p>
    <p>
      To use the <code>Snippet</code> component you must first tell the{' '}
      <Link to="/configuration/site-provider" code="SiteProvider"/> where to
      find the snippet files.  Add something like this to your main{' '}
      <code>App.jsx</code>.
    </p>
    <Snippet
      file="config/snippets.jsx"
      highlightLines="1-7,11"
      expand
    />
    <p>
      The example above assumes that your snippet files are located in the{' '}
      <code>./snippets</code> directory relative to the <code>App.jsx</code>.
      If they&apos;re located somewhere else then you should change the glob
      pattern that you pass to <code>import.meta.glob</code> and define
      the <code>matchSnippetsPrefix</code> property as a regular expression
      to remove the prefix.
    </p>
    <Snippet
      file="config/snippetsPrefix.jsx"
      highlightLines="2,12"
      expand
    />

    <p>
      Then you can import the <code>Snippet</code> component and add it to a
      page where you want to embed one of your snippet files.  The only
      required property is <code>file</code> which should be the file path
      relative to your snippets directory.  For example, specify <code>foo/bar.html</code>{' '}
      for the <code>./snippets/foo/bar.html</code> file.
    </p>
    <p>
      Any other properties set on the <code>Snippet</code> component will
      be forwarded to the <Link to="/code/source" code="Source"/> component.
      e.g. <code>caption</code>, <code>highlightLines</code>, <code>undent</code>, etc.
    </p>
    <Example
      Component={SnippetComp}
      code={SnippetSrc}
    />


    <h2 className="font-mono">language</h2>
    <p>
      The file extension will be used to determine the language type so that
      the correct syntax highlighting can be applied.  If the file doesn&apos;t
      have a file extension or the correct language can&apos;t be determined
      correctly from it then you should add the <code>language</code> property
      to specify it.
    </p>
    <p>
      The supported languages and their corresponding file extensions are
      shown below.
    </p>
    <table className="shaded striped celled">
      <thead>
        <tr>
          <th>File Extension</th>
          <th>Language</th>
        </tr>
      </thead>
      <tbody>
        { Object.entries(LANGUAGE_EXTENSIONS).map(
          ([ext, language]) =>
            <tr key={ext}>
              <td className="font-mono">.{ext}</td>
              <td className="font-mono">{language}</td>
            </tr>
        )}
      </tbody>
    </table>

  </div>

export default CodeSnippets