import React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from './december-2019-update.md';
import { useCMS, useLocalForm } from 'tinacms';

export default function Page() {
  const postData = {
    rawMarkdownBody: markdown,
    fileRelativePath: '/pages/blog/december-2019-update.md'
  }

  const cms = useCMS()

  const [post] = useLocalForm({
    id: 'december-2019-update.md',
    label: 'Post',
    fields: [
      {
        component: 'textarea',
        name: 'rawMarkdownBody',
        label: 'Content'
      }
    ],
    initialValues: {
      rawMarkdownBody: markdown
    },
    onSubmit: (values) => cms.api.git.writeToDisk({ content: values.rawMarkdownBody, fileRelativePath: '/pages/blog/december-2019-update.md' })
  })
  
  return <MarkdownDocs markdown={post.rawMarkdownBody} blog disableAd disableToc disableEdit />;
}
