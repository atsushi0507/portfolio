import NavBar from '../molecules/NavBar'

const WithNavBar = ( {children} ) => {
  return (
    <>
        <NavBar />
        {children}
    </>
  )
}

export default WithNavBar;