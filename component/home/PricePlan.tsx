import React, { useState } from 'react'
import styled from 'styled-components'
import { RiUserSmileLine } from 'react-icons/ri'
import { IoIosCube } from 'react-icons/io'
import { AiFillStar } from 'react-icons/ai'
export default function PricePlan() {
    const [isSwitch, setIsSwitch] = useState(true);
    return (
        <Root>
            <div className='main_container'>
                <div className='content_box'>
                    <h1>Find the <span>Right Plan.</span></h1>
                    <p className='description'>Flexible pricing options for freelancers and design teams.</p>
                    <div className='bill_switch'>
                        <div className={isSwitch ? 'bill active' : 'bill'} onClick={() => { setIsSwitch(!isSwitch) }}>Billed Yearly</div>
                        <div className={isSwitch ? 'slide_btn ' : 'slide_btn on'} onClick={() => { setIsSwitch(!isSwitch) }}></div>
                        <div className={isSwitch ? 'bill' : 'bill active'} onClick={() => { setIsSwitch(!isSwitch) }}>Billed Monthly</div>
                    </div>
                </div>
                <div className='price_plan'>
                    <div className='professional'>
                        <div className='premium'><AiFillStar /></div>
                        <span><RiUserSmileLine /> Individual</span>
                        <h1>Professional</h1>
                        <h5 className='price'><b>$19.99</b> /month</h5>
                        <div className='details'>
                            <div>
                                <IoIosCube />
                                <p>1 user</p>
                            </div>
                            <div>
                                <IoIosCube />
                                <p>2 TB of secure storage</p>
                            </div>
                            <div>
                                <IoIosCube />
                                <p>Premium productivity features and simple, secure file sharing</p>
                            </div>
                        </div>
                        <button className='btn'>Try free for 30 days</button>
                    </div>
                    <div className='standard'>
                        <span><RiUserSmileLine /> Individual</span>
                        <h1>Standard</h1>
                        <h5 className='price'><b>$19.99</b> /month</h5>
                        <div className='details'>
                            <div>
                                <IoIosCube />
                                <p>1 user</p>
                            </div>
                            <div>
                                <IoIosCube />
                                <p>2 TB of secure storage</p>
                            </div>
                            <div>
                                <IoIosCube />
                                <p>Premium productivity features and simple, secure file sharing</p>
                            </div>
                        </div>
                        <button className='btn'>Try free for 30 days</button>
                    </div>
                    <div className='ultimate'>
                        <span><RiUserSmileLine /> Individual</span>
                        <h1>Ultimate</h1>
                        <h5 className='price'><b>$19.99</b> /month</h5>
                        <div className='details'>
                            <div>
                                <IoIosCube />
                                <p>1 user</p>
                            </div>
                            <div>
                                <IoIosCube />
                                <p>2 TB of secure storage</p>
                            </div>
                            <div>
                                <IoIosCube />
                                <p>Premium productivity features and simple, secure file sharing</p>
                            </div>
                        </div>
                        <button className='btn'>Try free for 30 days</button>
                    </div>
                </div>
            </div>
        </Root>
    )
}
const Root = styled.section`
    padding:100px 0px;
    position: relative; 
    background: #fff;
    color: #292930;
    .content_box{
        text-align:center;
        h1{
            font-family: 'DM Sans', sans-serif;
            font-size: 80px;
            font-weight: 500;
            span{
                color:#5956E9;
            }
        }
        p.description {
            max-width: 380px;
            margin: 0 auto 34px;
            color: #999FAE;
            font-size: 18px;
            line-height: 1.5;
        }
    }
    .bill_switch {
        gap: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .slide_btn {
            width: 70px;
            height: 28px;
            background: #5956E9ed;
            border-radius: 20px;
            position: relative;
            transition:all 1s;
        }
        .slide_btn::after {
            content: '';
            width: 22px;
            height: 22px;
            background: #fff;
            position: absolute;
            left: 5px;
            border-radius: 50%;
            top: 50%;
            transform: translate(1% ,-50%);
            transition: all 0.5s;
        }
        .slide_btn.on::after{
            transform: translate(180% ,-50%);
            transition: all 0.5s;
        }
        .bill{
            font-weight: 600;
            transition:all 0.2s;
            color: #99A1AA;
        }
        .bill.active {
            color:#5956E9ed;
        }
    }
    .price_plan{ 
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 100px;
        &>div{
            position: relative;
            margin: 0 20px;
            padding: 40px;
            border-radius: 32px;
            span {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            h1{
                font-size: 40px;
                margin-bottom: 20px;
            }
            h5.price{
                /* color: rgba(255, 255, 255, 0.5); */
                font-size: 20px;
                font-weight: 600;
                margin-bottom: 45px;
            }
            .premium {
                background: #FFDC60;
                top: 16px;
                right: 13px;
                position: absolute;
                padding: 10px;
                border-radius: 50%;
                width: 46px;
                height: 46px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20px;
                color:#5956E9;
            }
            &:nth-child(1){
                background: #5956E9;
                color: #fff;
                .btn{
                    background: #fff;
                    color: #2522BA;
                }
            }
            &:nth-child(2){
                box-shadow: 0 20px 40px rgb(41 41 48 / 5%);
                background: #fff;
                .btn{
                    background: #FAB8C4;
                    color: #292930;
                }
            }
            &:nth-child(3){
                border: 1px solid #E3E6E9;
                color: #999FAE;
                .btn{
                    background: #5956E9;
                    color: #fff;
                }
            }
        }
        .details > div {
            display: flex;
            gap: 10px;
            margin: 16px 0px;
            svg{
                font-size: 20px;
                min-width: 20px;
            }
            p{
                font-family: 'Poppins', sans-serif;
                font-size: 16px;
            }
        }
        button.btn{
            margin-top:20px;
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
            font-weight: 600;
        }
    }
`
