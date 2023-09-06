const root = document.querySelector('.root');

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

function TombolAlert() {
  const tahan = nama => () => alert('hei ' + nama);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: tahan('aya')
  }, "JANGAN DIKLIK"), /*#__PURE__*/React.createElement("button", {
    onClick: tahan('yaya')
  }, "JANGAN DIKLIK NJING"));
}
function BelajarState() {
  const state = React.useState(0);
  const count = state[0];
  const setCount = state[1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count - 1);
    }
  }, "-"), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, "+"));
}
function BelajarState2() {
  const state = React.useState(false);
  // console.log(state)

  const status = state[0];
  // console.log(status)

  const setStatus = state[1];
  // console.log(setStatus)

  let keterangan = '';
  if (!status) {
    keterangan = 'Mati';
  } else {
    keterangan = 'Hidup';
  }
  console.log(keterangan);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "Status = ", keterangan), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setStatus(!status);
    }
  }, "PENCET"));
}
function BelajarState3() {
  // const state = React.useState(false)
  // const status = state[0]
  // const setStatus = state[1]

  const [status, setStatus] = React.useState(false);
  const style = {
    color: !status ? 'red' : 'blue'
  };
  const countoff = React.useState(0);
  const hitungoff = countoff[0];
  const setHitungoff = countoff[1];
  const counton = React.useState(0);
  const hitungon = counton[0];
  const setHitungon = counton[1];
  let tombol = '';
  let keterangan = '';
  if (!status) {
    tombol = 'hidupkan';
    keterangan = 'koid';
    // style.color = 'red'
  } else {
    tombol = 'matikan';
    keterangan = 'alive';
    // style.color = 'blue'
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "Status = ", /*#__PURE__*/React.createElement("span", {
    style: style
  }, keterangan)), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", null, "Berapa kali off = ", hitungoff), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", null, "Berapa kali on = ", hitungon), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setStatus(!status);
      if (!status) {
        setHitungoff(hitungoff + 1);
      } else {
        setHitungon(hitungon + 1);
      }
    }
  }, /*#__PURE__*/React.createElement("b", null, tombol)));
}
function BelajarLogin() {
  const [user, setUser] = React.useState('username');
  const [login, setLogin] = React.useState(false);
  const [pass, setPass] = React.useState('12345');
  if (login) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Hai ", user), /*#__PURE__*/React.createElement("button", {
      onClick: function () {
        setLogin(false);
      }
    }, "Log Out"));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, "Login", /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: user,
    onChange: function (e) {
      setUser(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: pass,
    onChange: function (e) {
      setPass(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      if (pass === '12345') {
        setLogin(true);
      } else {
        alert('Salah thollllLLLLL');
      }
    }
  }, "Login"));
}
function BelajarLogin2() {
  const [user, setUser] = React.useState('username');
  const [pass, setPass] = React.useState('atekkanz');
  const [login, setLogin] = React.useState(false);
  if (login) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "Hai ", user), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
      onClick: function () {
        setLogin(false);
      }
    }, "Log Out"));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "LOGIN dulu gaes"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: user,
    onChange: function (e) {
      setUser(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: pass,
    onChange: function (e) {
      setPass(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      if (pass === 'atekanz') {
        setLogin(true);
      } else {
        alert('bodoh');
      }
    }
  }, "LOGIN"));
}
function BelajarEffect() {
  const [makanan, setMakanan] = React.useState(' ');
  const [harga, setHarga] = React.useState(0);
  React.useEffect(function () {
    setTimeout(function () {
      setMakanan('Tahu');
      setHarga(1);
    }, 2000);
  }, [harga]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Makanan = ", makanan, " "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: makanan,
    onChange: function (e) {
      setMakanan(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("p", null, "Harga = ", harga, " K"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: harga,
    onChange: function (e) {
      setHarga(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: harga,
    onChange: function (e) {
      setHarga(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: harga,
    onChange: e => setHarga(e.target.value)
  }));
}
function BelajarLoop() {
  const pokemon = ['Bulbasaur', 'Cyndaquil', 'Mudkip', 'Turtwig', 'Snivy', 'Forakie', 'Rowlet', 'Scorbunny', 'Sprigatito'];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", null, pokemon.map(function (starter) {
    return /*#__PURE__*/React.createElement("li", {
      key: starter
    }, starter);
  })));
}
const BelajarCurd = () => {
  // const menulamongan = ['Ayam','Lele','Bebek','Tahu']

  const [input, setInput] = React.useState('');
  const [edit, setEdit] = React.useState(null);
  const [daftar, setDaftar] = React.useState([{
    id: Date.now() + 1,
    nama: 'Ayam'
  }, {
    id: Date.now() + 2,
    nama: 'Lele'
  }, {
    id: Date.now() + 3,
    nama: 'Bebek'
  }]);
  const handleBtn = () => {
    if (!edit) {
      const newMenu = {
        id: Date.now(),
        nama: input
      };
      console.log(newMenu);
      setDaftar([...daftar, newMenu]);
      setInput('');
    } else {
      setDaftar(daftar.map(menu => menu.id === edit ? {
        ...menu,
        nama: input
      } : menu));
      setEdit(null);
      setInput('');
      console.log(edit, input);
    }
  };
  const tombolHapus = id => {
    if (edit === id) {
      setInput('');
      setEdit(null);
      console.log(edit);
      setDaftar(daftar.filter(lauk => lauk.id !== id));
    } else {
      console.log(edit);
      setDaftar(daftar.filter(lauk => lauk.id !== id));
    }
  };
  const tombolEdit = id => {
    const [edit] = daftar.filter(lauk => lauk.id === id);
    // setMenulamongan2 (menulamongan2(lauk.id))
    // console.log(edit)
    setInput(edit.nama);
    // setEdit(id)
    // console.log(edit[0])
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, "Lamongan Asosiatif/Objekk nek ng JS"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: input,
    onChange: e => {
      setInput(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: handleBtn
  }, edit ? 'Update' : '+'),
  // penulisan ternary jika true jalankan (tanpa else)
  edit && /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setEdit(null);
      setInput('');
    }
  }, "Cencel"), /*#__PURE__*/React.createElement("ul", null, daftar.map(lauk =>
  /*#__PURE__*/
  // console.log(lauk)
  React.createElement("li", {
    key: lauk.id
  }, lauk.nama, /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'Blue',
      border: 0,
      marginLeft: 10,
      marginRight: -10,
      color: 'white'
    },
    onClick: () => {
      tombolEdit(lauk.id);
      setEdit(lauk.id);
    }
  }, "Edit"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'red',
      border: 0,
      marginLeft: 10,
      color: 'white'
    },
    onClick: () => {
      tombolHapus(lauk.id);
    }
  }, "X")))));
};
const BelajarFetch = () => {
  const [pokemon, setPokemon] = React.useState([]);
  React.useEffect(async function () {
    setPokemon(['Grookey', 'Scorbunny', 'Sobble']);
    // console.log('Terastlize')

    const url = `https://pokeapi.co/api/v2/pokemon?limit=14&offset=809`;
    fetch(url) //fetch kan sebuah url

    // style promise lama tanpa asyc
    //kemudian masukan fetch itu dalam sebuah variable bernama res
    .then(function (res) {
      // console.log(res)

      //buatkan res menjadi sebuah json/object
      return res.json();
    })

    //kemudian masuk variabel sebelumnya (res) yang telah menjadi object
    .then(function (json) {
      // console.log(json.results)
      setPokemon(json.results);
    });

    // express JS Style
    // fetch(url)
    //     .then(res => res.json())
    //     .then(json=>console.log(json))

    //fetch url tunggu promise selesai, kemudian masuan dalam variabel disini dinamai res
    // const res = await fetch(url)

    // //res tunggu promise jadikan object(json)
    // const json = await res.json()
    // console.log(json)
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", null, pokemon.map(function (poke) {
    console.log(poke);
    return /*#__PURE__*/React.createElement("li", {
      key: poke.url
    }, poke.name);
  })));
};
const element = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BelajarLoop, null));
ReactDOM.render(element, root);