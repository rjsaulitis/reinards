import Head from 'next/head'

export default function Details({title, thumbnail, children}) {
  return (
    <>
        <div className='flex flex-column flex-row-l justify-start'>
          <div className={"pl2 pr2 pl4-l ml2 pb3 pt6 pt0-l pb0-l w-100 w-50-l flex flex-column justify-center items-start"}>
            <h2 className="w-90-l f2 lh-title ma0 pa0" >{title}</h2>
            <p className='pr2 w-90-l lh-copy'>
                {children}
            </p>
          </div>
          <div className={"w-100 w-50-l flex justify-center justify-end-l mb5 mb0-l"}>
            <img src={"/images/"+thumbnail} />
          </div>
        </div>
    </>
  )
}
