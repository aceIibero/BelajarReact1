const root = document.querySelector('.root')

    // const element= (
    //     <div>
    //        {new Date().toLocaleDateString()}
    //     </div>
    // )

    // const style = {
    //     display:'flex'
    // }
    

    // const Starter = props => {
    //     return(
    //         <div>
    //             <img src={props.photo}/>
    //             <h1>{props.name}</h1>
    //         </div>
    //     )
    // }
// 
    // const element = (
    //     <div style = {style}>
    //     <Starter photo="https://www.serebii.net/scarletviolet/pokemon/new/906.png" name="Sprigatito" />
    //     <Starter photo="https://www.serebii.net/scarletviolet/pokemon/new/909.png" name="Fuecoco" />
    //     <Starter photo="https://www.serebii.net/scarletviolet/pokemon/new/912.png" name="Quaxly" />
    //     </div>
    // )

    // const tahan = ()=>alert('hei' )

    
    function TombolAlert(){
        const tahan =(nama)=> ()=>alert('hei ' +nama)
        return (
            <>
            <button onClick={tahan('aya')}>
            JANGAN DIKLIK</button>
            <button onClick={tahan('yaya')}>
            JANGAN DIKLIK NJING</button>
            </>
        )
    }

    function BelajarState(){
        const state = React.useState(0);

        const count = state[0]
        const setCount = state[1]

        return(
            <>
            <button onClick={function(){
                setCount(count - 1)
            }}>-</button>
            <span>{count}</span>
            <button onClick={function(){
                setCount(count + 1)
            }}>+</button>
            </>
        )
    }

    function BelajarState2(){
        const state = React.useState(false)
        // console.log(state)

        const status = state[0]
        // console.log(status)

        const setStatus = state[1]
        // console.log(setStatus)

        let keterangan = ''
        if (!status){
            keterangan = 'Mati'
        } else {
            keterangan = 'Hidup'
        }

        console.log(keterangan)


            return (
                <>
                <span>Status = {keterangan}</span>
                <br/>
                <button onClick={function(){
                    setStatus(!status)
                }}>PENCET</button>
                </>
            )
        
    }

    function BelajarState3(){

        // const state = React.useState(false)
        // const status = state[0]
        // const setStatus = state[1]

        const [status, setStatus ] = React.useState(false)

        const style = {
                color : !status ? 'red' : 'blue'
            }


        const countoff = React.useState(0)
        const hitungoff = countoff[0]
        const setHitungoff = countoff[1]
        
        const counton = React.useState(0)
        const hitungon = counton[0]
        const setHitungon = counton[1]

        let tombol = ''
        let keterangan =''
        if (!status){
            tombol = 'hidupkan'
            keterangan = 'koid'
            // style.color = 'red'
        } else {
            tombol = 'matikan'
            keterangan = 'alive'
            // style.color = 'blue'
        }

         return(
            <>
            <span>Status = <span style={style}>{keterangan}</span></span>
            <br/>
            <span>Berapa kali off = {hitungoff}</span>
            <br/>
            <span>Berapa kali on = {hitungon}</span>
            <br/>
            <button onClick={function(){
                setStatus(!status) 

                if (!status){
                    setHitungoff(hitungoff + 1)
                } else {
                    setHitungon(hitungon +1)
                }
            }}><b>{tombol}</b></button>
            </>
         )
    }

    function BelajarLogin(){

        const [user, setUser] = React.useState ('username')
        const [login, setLogin] = React.useState (false)
        const [pass, setPass] = React.useState ('12345')
        
       
        if(login){
            return (
                <>
                <h1>Hai {user}</h1>
                <button onClick={function(){
                setLogin(false)
                }}>Log Out</button>
                </>
            )
        }

        return(

            <>
            Login
            <input type='text' value={user} onChange={function(e){
                setUser(e.target.value)
            }}></input>
            <br/>
            <input type='password' value={pass} onChange={function(e){
                setPass(e.target.value)
            }}></input>
            <br/>
            <button onClick={function(){
                if (pass === '12345'){
                    setLogin(true)
                } else {
                    alert('Salah thollllLLLLL')
                }
            }}>Login</button>
            </>
        )
    }

    function BelajarLogin2(){
        const [user,setUser] = React.useState ('username')
        const [pass, setPass] = React.useState ('atekkanz')
        const [login, setLogin] = React.useState (false)
        
        if(login){
            return (
                <>
                <span>Hai {user}</span>
                <br/>
                <button onClick={function(){
                    setLogin(false)
                }}>Log Out</button>

                </>
                 )
        }
            return(
                <>
                <span>LOGIN dulu gaes</span>
                <br/>
                <input type='text' value={user} onChange={
                    function(e){
                        setUser(e.target.value) }             
                }></input>
                <br/>
                <input type='password' value={pass} onChange={
                    function(e){
                        setPass(e.target.value)
                    }
                }></input>
                <br/>
                <button onClick={function(){
                    if(pass === 'atekanz'){
                        setLogin(true)
                    } else {
                        alert('bodoh')
                    }
                }}>LOGIN</button>
                </>
            )
        
    }

    function BelajarEffect(){
        const [makanan, setMakanan] = React.useState (' ')
        const [harga, setHarga] = React.useState (0)

        React.useEffect(function(){
            setTimeout(function(){
                setMakanan('Tahu')
                setHarga(1)
            }, 2000)
        },[harga])

        return (
            <>
            <p>Makanan = {makanan} </p>
            <input type='text' value={makanan} 
            onChange={function(e){
                setMakanan(e.target.value)
            }}>
            </input>
            
            <p>Harga = {harga} K</p>
            
            <input type='text' value={harga} 
            onChange={function(e){
                setHarga(e.target.value)
            }}></input>
            
            <input type='text' value={harga} 
            onChange={function(e){
                setHarga(e.target.value)
            }}></input>
            
            <input type='text' value={harga} 
            onChange={(e)=> setHarga(e.target.value)
            }></input>
            
            </>
        )

    }

    function BelajarLoop(){

        const pokemon = (['Bulbasaur', 'Cyndaquil', 'Mudkip', 'Turtwig', 'Snivy', 'Forakie', 'Rowlet', 'Scorbunny', 'Sprigatito'])

        return (
            <>
            <ul>
                {pokemon.map(function(starter){
                    return(
                        <li key={starter}>{starter}</li>
                    )
                })}
            </ul>
            </>
        )
    }

    const BelajarCurd=()=>{
        // const menulamongan = ['Ayam','Lele','Bebek','Tahu']

        const [input, setInput] = React.useState ('')
        const [edit, setEdit] = React.useState (null)
        const [daftar, setDaftar] = React.useState([
            {
                id : Date.now() +1,
                nama : 'Ayam'
            },
            {
                id : Date.now() +2,
                nama : 'Lele'
            },
            {
                id : Date.now() +3,
                nama : 'Bebek'
            },
        ])

        const handleBtn = ()=>{
            if (!edit){
                const newMenu = {
                    id : Date.now(),
                    nama : input
                }
                console.log(newMenu)
                setDaftar([...daftar,newMenu])
                setInput('')
            } else {
                setDaftar (daftar.map(menu =>(
                    menu.id === edit ?{
                        ...menu,
                        nama : input
                    }
                    : menu
                )))
            setEdit(null)
            setInput('')
                console.log(edit, input)
            }
        }
        
        const tombolHapus = id =>{
            if(edit === id){
             setInput('')
             setEdit(null) 
             console.log(edit)
                setDaftar (
                    daftar.filter(
                        (lauk => lauk.id !== id)
                    ))  
            }
            else {
                console.log(edit)
                setDaftar (
                    daftar.filter(
                        (lauk => lauk.id !== id)
                    ))
                }
        }    
        const tombolEdit = id =>
        {
            const [edit] =
            daftar.filter(
                (lauk => lauk.id === id)
            )
            // setMenulamongan2 (menulamongan2(lauk.id))
            // console.log(edit)
            setInput(edit.nama)
            // setEdit(id)
            // console.log(edit[0])
        }
         
        return (
            <>
            
            <b>Lamongan Asosiatif/Objekk nek ng JS</b>
            <br/>
            <input type='text' value={input} onChange={(e) => {
                setInput(e.target.value)
                }}></input>
                
            <button onClick={handleBtn}>{
                edit ? 'Update' : '+'
            }</button>

            {/* {
                edit ? <button
                onClick={()=>{
                    setEdit(false)
                    setTambah('')
                }}
                >Cencel</button> : null
            } */}

            {
                // penulisan ternary jika true jalankan (tanpa else)
                edit && <button
                onClick={()=>{
                    setEdit(null)
                    setInput('')
                }}
                >Cencel</button>
            }
            
            <ul>
                {daftar.map((lauk)=>
                    // console.log(lauk)
                    <li key={lauk.id}>
                        {lauk.nama}

                        <button style={
                            {
                                background : 'Blue',
                                border : 0,
                                marginLeft : 10,
                                marginRight : -10,
                                color : 'white',
                            }
                        }onClick={()=>{
                            tombolEdit(lauk.id)
                            setEdit(lauk.id)
                        }}>
                        Edit
                        </button>

                        <button style={
                            {
                                background : 'red',
                                border : 0,
                                marginLeft : 10,
                                color : 'white',
                            }
                        }
                        onClick={()=>{
                          tombolHapus(lauk.id)
                        }}>X</button>
                    </li>
                )}
            </ul>
            </>
        )
    }

    const BelajarFetch=()=>{
        const [pokemon, setPokemon] = React.useState ([])
        
        React.useEffect(async function(){
            setPokemon(['Grookey', 'Scorbunny', 'Sobble'])
            // console.log('Terastlize')

            const url = `https://pokeapi.co/api/v2/pokemon?limit=14&offset=809`

            fetch(url) //fetch kan sebuah url

                // style promise lama tanpa asyc
                //kemudian masukan fetch itu dalam sebuah variable bernama res
                .then(function(res){
                    // console.log(res)

                    //buatkan res menjadi sebuah json/object
                    return res.json()
                })

                //kemudian masuk variabel sebelumnya (res) yang telah menjadi object
                .then(function(json){
                    // console.log(json.results)
                    setPokemon(json.results)
                })

                // express JS Style
                // fetch(url)
                //     .then(res => res.json())
                //     .then(json=>console.log(json))

            //fetch url tunggu promise selesai, kemudian masuan dalam variabel disini dinamai res
            // const res = await fetch(url)

            // //res tunggu promise jadikan object(json)
            // const json = await res.json()
            // console.log(json)

        },[])

        return(
            <>
            <ul>
                {pokemon.map(function(poke){
                    console.log(poke)
                    return (
                        <li key={poke.url}>{poke.name}</li>
                    )
                })}
            </ul>
            
            </>
        )
    }

    const element = (
        <>
      {/* <TombolAlert /> */}
      {/* <BelajarA /> */}
      {/* <BelajarState/> */}
      {/* <BelajarState2/> */}
      {/* <BelajarState3/> */}
      {/* <BelajarLogin/> */}
      {/* <BelajarLogin2/> */}
      {/* <BelajarEffect/> */}
      <BelajarLoop/>
      {/* <BelajarCurd/> */}
      {/* <BelajarFetch/> */}
      </>
    )

ReactDOM.render(element,root );