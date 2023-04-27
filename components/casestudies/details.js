import Head from 'next/head'

export default function Details({title, children}) {
  return (
    <>
        <div className='flex flex-column flex-row-l justify-start pv6-l'>
          <div className={"pt5 pb3 pt0-l pb0-l w-100 w-50-l flex justify-center items-start"}>
            <h2 className="w-90-l f2 lh-title ma0 pa0" >{title}</h2>
          </div>
          <div className={"w-100 w-50-l flex justify-center justify-end-l mb5 mb0-l"}>
            <p className='w-90-l lh-copy pa0 ma0'>
                {children}
            </p>
          </div>
        </div>
    </>
  )
}
