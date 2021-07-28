import React from 'react'
import Layout from '../component/layout'
export default function get_order() {
  return (
    <div >
      <Layout>
      <table  width="25%" border={0}><br/>
      <br/>
      <br/>
      <br/>
  <tbody><tr>
      <td><label htmlFor="nama">Nama</label><input className="form-control" type="text" name="nama" /></td>
    </tr>
    <tr>
      <td>
        <label htmlFor="tipe">Jenis Sablon</label>
        <select className="custom-select d-block w-100" name="tipe" id="tipe" onchange="CariHarga()">
          <option value="-">-Pilih Jenis Sablon</option>
          <option value="Plastisol">Plastisol</option>
          <option value="Rubber">Rubber</option>
          <option value="GlowInTheDark">Glow In The Dark</option>
          <option value="Foam">Foam</option>
          <option value="kambing">kumbing</option>
        </select></td>
    </tr>
    <tr>
      <td><div className="mb-3">
          <label htmlFor="harga">Harga</label>
          <input type="number" className="form-control" id="harga" name="harga" readOnly /></div></td>
    </tr>
    <tr>
      <td><div className="mb-3">
          <label htmlFor="Qty">QTY</label>
          <input type="number" className="form-control" id="qty" name="qty" onchange="CariTotal(),CariTotal()" />
        </div></td></tr>
    <tr>
      <td><div className="mb-3">
          <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
          <input type="email" className="form-control" id="email" name="email" placeholder="you@example.com" /></div></td>
    </tr>
    <tr>
      <td><input className="btn btn-secondary" type="file" name="gambar" /></td>
    </tr>
    <tr>
      <td><div className="mb-3">
          <label htmlFor="total">Total <span className="text-muted">(Order-Total)</span></label>
          <input type="number" className="form-control" id="total" name="total" placeholder={0} readOnly /></div></td>
    </tr>
    <tr>
      <td><input className="btn btn-primary btn-lg btn-block" type="submit" name="Submit" defaultValue="Add" /></td>
    </tr>
  </tbody>
</table>
</Layout>
    </div>
  )
}
