// array
//const listNilai =['A', 'B', 'C']

//const.log(listNilai)

const dataMahasiswa = [
    {
    nama: 'Ahmad Firdaus',
    npm: '19421002',
    prodi: 'Informatika'
    },{
    nama: 'Deva Aji Saputra',
    npm: '19421075',
    prodi: 'Informatika'
    }
]

//console.log(dataMahasiswa[1].npm)

for (let i in dataMahasiswa){
    console.log(dataMahasiswa[i].nama + ' _' + dataMahasiswa [i].npm + '_ ' + dataMahasiswa[i].prodi)
}