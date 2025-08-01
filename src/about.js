import {
  ABOUT_ME_MARKDOWN,
  EMAIL,
  LINKEDIN_PROFILE,
  LOCATION,
  USERNAME,
  WEBSITE_URL
} from './metadata'

const AboutMe = () => {
  return (
    <div>
      <div className='mb-3 f4 text-gray mx-auto px-3'>{ABOUT_ME_MARKDOWN}</div>

      <div className='f4 mb-6'>
        <div className='d-md-inline-block mx-3 mb-1 mb-md-0'>
          <svg
            height='20'
            className='octicon octicon-mark-github mr-2 v-align-middle'
            fill='#24292e'
            aria-label='GitHub'
            viewBox='0 0 16 16'
            version='1.1'
            width='20'
            role='img'
          >
            <path
              fillRule='evenodd'
              d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'
            ></path>
          </svg>
          <a
            href={`https://github.com/${USERNAME}`}
            style={{ textDecoration: 'none' }}
            className='hover:no-underline'
          >
            @{`${USERNAME}`}
          </a>
        </div>

        <div className='d-md-inline-block mx-3 mb-1 mb-md-0'>
          <svg
            height='20'
            className='octicon octicon-mail mr-2 v-align-middle'
            fill='#24292e'
            aria-label='email'
            viewBox='0 0 14 16'
            version='1.1'
            width='17'
            role='img'
          >
            <path
              fillRule='evenodd'
              d='M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z'
            ></path>
          </svg>
          <a
            href={`mailto:${EMAIL}`}
            style={{ textDecoration: 'none' }}
            className='hover:no-underline'
          >
            {EMAIL}
          </a>
        </div>

        <a
          style={{ textDecoration: 'none' }}
          href='https://en.wikipedia.org/wiki/Lahore'
        >
          <svg
            height='20'
            className='octicon octicon-location mr-2 v-align-middle'
            fill='#24292e'
            aria-label='Location'
            viewBox='0 0 12 16'
            version='1.1'
            width='15'
            role='img'
          >
            <path
              fillRule='evenodd'
              d='M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z'
            ></path>
          </svg>
          {LOCATION}
        </a>

        <div className='d-flex flex-wrap flex-items-start flex-justify-center mt-1 mt-md-3'>
          <div className='mr-3 mb-3'>
            <a
              href={LINKEDIN_PROFILE}
              className='tooltipped tooltipped-se'
              aria-label='LinkedIn: ibrahimkhurshid'
            >
              <svg
                height='20'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 19 18'
              >
                <path
                  d='M3.94 2A2 2 0 1 1 2 0a2 2 0 0 1 1.94 2zM4 5.48H0V18h4zm6.32 0H6.34V18h3.94v-6.57c0-3.66 4.77-4 4.77 0V18H19v-7.93c0-6.17-7.06-5.94-8.72-2.91z'
                  fill='#959da5'
                ></path>
              </svg>
              <span className='d-none'>LinkedIn</span>
            </a>
          </div>

          <div className='mb-3'>
            <a
              href={WEBSITE_URL}
              className='tooltipped tooltipped-se'
              aria-label={`Website: ${WEBSITE_URL}`}
            >
              <svg
                className='octicon octicon-globe'
                viewBox='0 0 10 18'
                version='1.1'
                width='25'
                height='25'
                fill='#959da5'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M7 1C3.14 1 0 4.14 0 8s3.14 7 7 7c.48 0 .94-.05 1.38-.14-.17-.08-.2-.73-.02-1.09.19-.41.81-1.45.2-1.8-.61-.35-.44-.5-.81-.91-.37-.41-.22-.47-.25-.58-.08-.34.36-.89.39-.94.02-.06.02-.27 0-.33 0-.08-.27-.22-.34-.23-.06 0-.11.11-.2.13-.09.02-.5-.25-.59-.33-.09-.08-.14-.23-.27-.34-.13-.13-.14-.03-.33-.11s-.8-.31-1.28-.48c-.48-.19-.52-.47-.52-.66-.02-.2-.3-.47-.42-.67-.14-.2-.16-.47-.2-.41-.04.06.25.78.2.81-.05.02-.16-.2-.3-.38-.14-.19.14-.09-.3-.95s.14-1.3.17-1.75c.03-.45.38.17.19-.13-.19-.3 0-.89-.14-1.11-.13-.22-.88.25-.88.25.02-.22.69-.58 1.16-.92.47-.34.78-.06 1.16.05.39.13.41.09.28-.05-.13-.13.06-.17.36-.13.28.05.38.41.83.36.47-.03.05.09.11.22s-.06.11-.38.3c-.3.2.02.22.55.61s.38-.25.31-.55c-.07-.3.39-.06.39-.06.33.22.27.02.5.08.23.06.91.64.91.64-.83.44-.31.48-.17.59.14.11-.28.3-.28.3-.17-.17-.19.02-.3.08-.11.06-.02.22-.02.22-.56.09-.44.69-.42.83 0 .14-.38.36-.47.58-.09.2.25.64.06.66-.19.03-.34-.66-1.31-.41-.3.08-.94.41-.59 1.08.36.69.92-.19 1.11-.09.19.1-.06.53-.02.55.04.02.53.02.56.61.03.59.77.53.92.55.17 0 .7-.44.77-.45.06-.03.38-.28 1.03.09.66.36.98.31 1.2.47.22.16.08.47.28.58.2.11 1.06-.03 1.28.31.22.34-.88 2.09-1.22 2.28-.34.19-.48.64-.84.92s-.81.64-1.27.91c-.41.23-.47.66-.66.8 3.14-.7 5.48-3.5 5.48-6.84 0-3.86-3.14-7-7-7L7 1zm1.64 6.56c-.09.03-.28.22-.78-.08-.48-.3-.81-.23-.86-.28 0 0-.05-.11.17-.14.44-.05.98.41 1.11.41.13 0 .19-.13.41-.05.22.08.05.13-.05.14zM6.34 1.7c-.05-.03.03-.08.09-.14.03-.03.02-.11.05-.14.11-.11.61-.25.52.03-.11.27-.58.3-.66.25zm1.23.89c-.19-.02-.58-.05-.52-.14.3-.28-.09-.38-.34-.38-.25-.02-.34-.16-.22-.19.12-.03.61.02.7.08.08.06.52.25.55.38.02.13 0 .25-.17.25zm1.47-.05c-.14.09-.83-.41-.95-.52-.56-.48-.89-.31-1-.41-.11-.1-.08-.19.11-.34.19-.15.69.06 1 .09.3.03.66.27.66.55.02.25.33.5.19.63h-.01z'
                ></path>
              </svg>
              <span className='d-none'>Website</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
