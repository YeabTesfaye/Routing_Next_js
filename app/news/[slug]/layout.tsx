import { Fragment, ReactNode } from 'react'

interface Props{
    modal : ReactNode;
    children : ReactNode;
}
const NewsDetailLayout = ({children,modal} : Props) => {
  return (
   <Fragment>
    {modal}
    {children}
   </Fragment>
  )
}

export default NewsDetailLayout