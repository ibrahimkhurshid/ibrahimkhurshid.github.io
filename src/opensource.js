import { USERNAME } from './metadata'

const OpenSourceProjects = () => {
  return (
    <div className='my-6'>
      <h2 className='mb-4'>Open Source Projects</h2>
      <p className='f4 mb-4 text-gray'>
        I love contributing to open source and sharing tools with the developer
        community. Here are a few projects I maintain or contribute to. You can
        find more on my{' '}
        <a href={`https://github.com/${USERNAME}`}>GitHub profile</a>.
      </p>
      <div className='d-sm-flex flex-wrap gutter-condensed mb-4'>
        <div className='col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3'>
          <div className='github-component d-flex flex-column flex-justify-between height-full text-left border border-gray-light bg-white rounded-1 p-3'>
            <div>
              <div className='d-flex flex-justify-between flex-items-start mb-1'>
                <h1 className='f4 lh-condensed mb-1'>
                  <svg
                    height='20'
                    className='octicon octicon-repo mr-1 v-align-middle'
                    fill='#586069'
                    aria-label='repo'
                    viewBox='0 0 12 16'
                    width='15'
                    role='img'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z'
                    ></path>
                  </svg>
                  <a href={`https://github.com/${USERNAME}/portfolio-template`}>
                    portfolio-template
                  </a>
                </h1>
              </div>
              <div className='text-gray mb-2 ws-normal'>
                A minimal and customizable portfolio template built with React
                and Tailwind CSS.
              </div>
            </div>
            <div className='d-flex f6'>
              <span
                className='repo-language-color ml-0 mr-1'
                style={{ backgroundColor: '#38bdf8' }}
              ></span>
              <span className='mr-3' itemProp='programmingLanguage'>
                JavaScript
              </span>
              <a
                href={`https://github.com/${USERNAME}/portfolio-template/stargazers`}
                className='d-inline-block link-gray mr-4'
              >
                <svg
                  className='octicon octicon-star mr-1'
                  viewBox='0 0 14 16'
                  width='14'
                  height='16'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z'
                  ></path>
                </svg>
                42
              </a>
              <a
                href={`https://github.com/${USERNAME}/portfolio-template/network/members`}
                className='d-inline-block link-gray mr-4'
              >
                <svg
                  className='octicon octicon-git-branch mr-1'
                  viewBox='0 0 10 16'
                  width='10'
                  height='16'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z'
                  ></path>
                </svg>
                10
              </a>
            </div>
          </div>
        </div>

        <div className='col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3'>
          <div className='github-component d-flex flex-column flex-justify-between height-full text-left border border-gray-light bg-white rounded-1 p-3'>
            <div>
              <div className='d-flex flex-justify-between flex-items-start mb-1'>
                <h1 className='f4 lh-condensed mb-1'>
                  <svg
                    height='20'
                    className='octicon octicon-repo mr-1 v-align-middle'
                    fill='#586069'
                    aria-label='repo'
                    viewBox='0 0 12 16'
                    width='15'
                    role='img'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z'
                    ></path>
                  </svg>
                  <a href={`https://github.com/${USERNAME}/react-todo-app`}>
                    react-todo-app
                  </a>
                </h1>
              </div>
              <div className='text-gray mb-2 ws-normal'>
                A simple and elegant todo app built with React, featuring dark
                mode and drag-and-drop.
              </div>
            </div>
            <div className='d-flex f6'>
              <span
                className='repo-language-color ml-0 mr-1'
                style={{ backgroundColor: '#38bdf8' }}
              ></span>
              <span className='mr-3' itemProp='programmingLanguage'>
                JavaScript
              </span>
              <a
                href={`https://github.com/${USERNAME}/react-todo-app/stargazers`}
                className='d-inline-block link-gray mr-4'
              >
                <svg
                  className='octicon octicon-star mr-1'
                  viewBox='0 0 14 16'
                  width='14'
                  height='16'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z'
                  ></path>
                </svg>
                27
              </a>
              <a
                href={`https://github.com/${USERNAME}/react-todo-app/network/members`}
                className='d-inline-block link-gray mr-4'
              >
                <svg
                  className='octicon octicon-git-branch mr-1'
                  viewBox='0 0 10 16'
                  width='10'
                  height='16'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z'
                  ></path>
                </svg>
                6
              </a>
            </div>
          </div>
        </div>

        <div className='col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3'>
          <div className='github-component d-flex flex-column flex-justify-between height-full text-left border border-gray-light bg-white rounded-1 p-3'>
            <div>
              <div className='d-flex flex-justify-between flex-items-start mb-1'>
                <h1 className='f4 lh-condensed mb-1'>
                  <svg
                    height='20'
                    className='octicon octicon-repo mr-1 v-align-middle'
                    fill='#586069'
                    aria-label='repo'
                    viewBox='0 0 12 16'
                    width='15'
                    role='img'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z'
                    ></path>
                  </svg>
                  <a href={`https://github.com/${USERNAME}/api-utils`}>
                    api-utils
                  </a>
                </h1>
              </div>
              <div className='text-gray mb-2 ws-normal'>
                Handy utilities for building robust APIs in Node.js and Express.
              </div>
            </div>
            <div className='d-flex f6'>
              <span
                className='repo-language-color ml-0 mr-1'
                style={{ backgroundColor: '#38bdf8' }}
              ></span>
              <span className='mr-3' itemProp='programmingLanguage'>
                JavaScript
              </span>
              <a
                href={`https://github.com/${USERNAME}/api-utils/stargazers`}
                className='d-inline-block link-gray mr-4'
              >
                <svg
                  className='octicon octicon-star mr-1'
                  viewBox='0 0 14 16'
                  width='14'
                  height='16'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z'
                  ></path>
                </svg>
                13
              </a>
              <a
                href={`https://github.com/${USERNAME}/api-utils/network/members`}
                className='d-inline-block link-gray mr-4'
              >
                <svg
                  className='octicon octicon-git-branch mr-1'
                  viewBox='0 0 10 16'
                  width='10'
                  height='16'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z'
                  ></path>
                </svg>
                3
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpenSourceProjects
