import React from 'react'
import styled from 'styled-components'
import { MdMail } from 'react-icons/md'
export default function GetStarted() {
    return (
        <Root>
            <div className='main_container'>
                <div className='circle_section'>
                    <div className='main_circle'>
                        <div className='middel_circle'>
                            <div className='bottom_circle'>
                                <img src='/image/access-pic-2.png' className='main_img' />
                                <img src='/image/main-pic-1.png' className='media' />
                                <img src='/image/main-pic-2.png' className='message' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='get_ready'>
                    <h2>Ready to get started?</h2>
                    <h2>Sign up with your email</h2>
                </div>
                <div className='mail_section'>
                    <MdMail />
                    <input type='text' placeholder='Email address' />
                    <button className='btn'>Get Started</button>
                </div>
            </div>
        </Root>

    )
}
const Root = styled.section`
    position: relative;
    background: #ECF2F6;
    text-align: center;
    color:#292930;
    .circle_section {
        padding: 100px 0;
        position: relative;
        .main_circle,
        .middel_circle,
        .bottom_circle{
            margin: auto;
            border-radius: 50%;
            display:flex;
            position: relative;
            align-items:center;
        }
        .main_circle {
            width: 723px;
            height: 723px;
            background: #ffffff4d;
        }
        .middel_circle {
            z-index: 2;
            width: 603px;
            height: 603px;
            background: #ffffff4d;
        }
        .bottom_circle{
            z-index: 3;
            width: 475px;
            height: 475px;
            background: #5956E9;
            img.main_img{
                margin-left: 82px;
                margin-top: 84px;
                height: 104%;
            }
            img.media {
                position: absolute;
                width: 300px;
                right: 0px;
                top: 0px;
                transform: translate(70px, -60px);
            }
            img.message {
                width: 212px;
                left: -22px;
                top: 46%;
                position: absolute;
            }
        }
    }
    .get_ready{
        h2{
            font-weight: 500;
            font-size: 24px;
        }
    }
    .mail_section{
        max-width: 504px;
        margin: 30px auto -40px auto;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        border-radius: 20px;
        padding: 10px;
        gap: 10px;
        z-index: 9;
        position: relative;
        input {
            flex:1;
            padding: 26px 0px;
            border: none;
            background: no-repeat;
            font-size: 18px;
        }
        .btn{
            background: #5956E9;
            color: #fff;
            font-weight:600;
        }
        svg{
            font-size: 22px;
        }
    }
`