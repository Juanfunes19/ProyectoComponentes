import React from 'react'
import "./style.css"
import maggie from "../../Img/maggie.jpg"
import homero from "../../Img/homer.jpg"
import bart from "../../Img/bart.jpg"

const Cards = () => {
    return (
        <div className=' caja row p-5'>
            <div className="card col-3 p-3 ">
                <img src={maggie} className="card-img-top" alt="maggie" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

            <div className="card col-3 p-3">
                <img src={homero} className="card-img-top" alt="homero" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

            <div className="card col-3 p-3">
                <img src={bart} className="card-img-top" alt="bart" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Cards