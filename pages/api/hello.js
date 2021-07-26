// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json(
   {dataPelanggan : [
     {nama: 'John Doe', alamat: 'karangrejo'},
     {nama: 'jhon thor', alamat: 'rogojampi'},
     {nama: 'bre bra', alamat: 'wongsorjo'}
        ]
      }
    )
}
