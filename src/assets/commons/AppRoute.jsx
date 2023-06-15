function AppRoute() {
    return(

        <>
        <Routes>
            <Route path ='/Home' element = {<Home/>}></Route>
            <Route path ='/juegos' element = {<Juegos/>}></Route> 
            <Route path ='*' element = {<Error/>}></Route> 
        </Routes>
        </>
    )
}