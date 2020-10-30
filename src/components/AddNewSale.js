import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddNewSale = () => {
    const [desc, setDesc] = useState('');
    const [grailed, setGrailed] = useState(0);
    const [paypal, setPaypal] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [shipdate, setShipdate] = useState('');
    const [tracking, setTracking] = useState('');

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        //Dont let form submit
        e.preventDefault();

        const newSale = {
            id: Math.floor(Math.random() * 100),
            desc,
            grailed: +grailed,
            paypal: +paypal,
            shipping: +shipping,
            shipdate,
            tracking
        }

        addTransaction(newSale);
    }

    return (
        <>
            <h3>Add Sale</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="desc">Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)}
                        placeholder="x" />
                </div>
                <div className="form-control">
                    <label htmlFor="grail">Grailed Sale Price</label>
                    <input type="text" value={grailed} onChange={(e) => setGrailed(e.target.value)}
                        placeholder="xx.xx" />
                </div>
                <div className="form-control">
                    <label htmlFor="paypal">Recieved Paypal Amount</label>
                    <input type="text" value={paypal} onChange={(e) => setPaypal(e.target.value)}
                        placeholder="xx.xx" />
                </div>
                <div className="form-control">
                    <label htmlFor="ship">Shipping Cost <br /></label>
                    <input type="text" value={shipping} onChange={(e) => setShipping(e.target.value)}
                        placeholder="xx.xx" />
                </div>
                <div className="form-control">
                    <label htmlFor="date">Date Shipped <br /></label>
                    <input type="text" value={shipdate} onChange={(e) => setShipdate(e.target.value)}
                        placeholder="dd/mm/yy" />
                </div>
                <div className="form-control">
                    <label htmlFor="track">Tracking Number <br /></label>
                    <input type="text" value={tracking} onChange={(e) => setTracking(e.target.value)}
                        placeholder="xxxx-xxxx-xxxx-xxxx-xx" />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
