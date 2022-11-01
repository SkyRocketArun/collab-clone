import React from 'react'
import styled from 'styled-components'
export default function NativePrototype() {
    return (
        <Root>
            <div className='main_container'>
                <div className='content'>
                    <div className='content_box'>
                        <h1>Native-like Prototying.</h1>
                        <p>With Collab Smart Prototype you create your interactions and animations once and store as presets in the cloud for future use.</p>
                        <p>Use the Collab App to test in real-time.</p>
                        <button className='btn'>See Sample Prototype</button>
                    </div>
                    <div className='img_box'>
                        <div className='main_circle'></div>
                        <img src='/image/hand-1.png' alt='Hand' className='thumb_up' />
                    </div>
                </div>
            </div>
        </Root>

    )
}
const Root = styled.section`
    position: relative;
    padding: 20px 0px;
    background: #fff;
    color: #292930;
    .content{
        background: #fff linear-gradient(90deg, #ECF2F6 0%, rgba(236, 242, 246, 0) 70.31%);
        margin: 0 auto;
        padding: 104px 70px;
        border-radius: 40px;
        border: 1px solid #F1F5F8;
        display:flex;
        position: relative;
        gap: 80px;
        z-index: 1;
        &:before{
            content: '';
            position: absolute;
            width: 95%;
            height: 16px;
            background: rgba(236,242,246,0.5);
            bottom: -16px;
            left: 50%;  
            transform: translateX(-50%);
            border-radius: 0px 0px 40px 40px;
            z-index: -1;
        }
        .content_box{
            h1{
                font-family: 'DM Sans', sans-serif;
                font-size: 80px;
                font-weight: 500;
            }
            p{
                font-family: 'Poppins', sans-serif;
                font-size: 16px;
                margin-bottom: 23px;
                color: #292930;
            }
            .btn{
                background: #5956E9;
            }
        }
        .img_box{
            position: relative;
            .main_circle{
                top: 50%;
                /* right: calc(50% - 430px); */
                z-index: 2;
                width: 410px;
                height: 410px;
                margin-top: -205px;
                background: #FAB8C4;
                position: relative;
                border-radius: 50%;
            }
            img.thumb_up {
                position: absolute;
                width: 100%;
                z-index: 9;
                left: 0px;
                top: 50%;
                transform: translate(54px, -50%);
            }
        }
    }
`