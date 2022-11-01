import React from 'react'
import Image from 'next/image';
import styled from 'styled-components'
import { BsPlayBtnFill } from 'react-icons/bs'
export default function BannerSection() {
    return (
        <Root>
            <div className='background_section'>
                <div className='main_container'>
                    <div className='main_wrap'>
                        <div className='content_section'>
                            <div className='title_box'>
                                <span className='title_text'>Create</span>
                                <span className='title_text like'>Like<span style={{ color: '#6840e7' }}>_</span></span>
                                <span className='title_text'>Never</span>
                                <span className='title_text'>Before<span style={{ color: '#6840e7' }}>.</span></span>
                            </div>
                            <p>Create, build, collaborate and ship products faster. Good bye code! </p>
                            <div className='action_btn'>
                                <button className='btn'>Get Started</button>
                                <button className='play_btn'><BsPlayBtnFill />See It In Action</button>
                            </div>
                        </div>
                        <div className='img_section'>
                            <div className='img_box'>
                                <img src='/image/main-pic-3.png' alt='Pc image' />
                                <img src='/image/main-pic-2.png' alt='Pc image' className='message' />
                                <img src='/image/main-pic-1.png' alt='Pc image' className='media' />
                                <img src='/image/mouse.png' alt='Pc image' className='mouse' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Root>
    );
}
const Root = styled.section`
    background:#ffffff;
    text-align:center;
    color:#292930;                     
    text-align:left;
    overflow-x: clip;
    .main_wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 150px 0px;
        >div{
            flex:1;
        }
        .content_section{
            z-index:1;
            font-family: 'DM Sans', sans-serif;
            span.title_text {
                font-size: 96px;
                font-weight:500;
                display: block;
            }
        .action_btn {
            display: flex;
            align-items: center;
            gap: 30px;
            margin-top: 30px;
            button.btn{
                background:#6840e7;  
            }
            button.play_btn {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 10px;
                background: none;
                border: none;
                color: #999FAE;
                font-size:16px;
                font-weight:500;
                svg{
                    color:#6840e7;
                }
            }
        }
        }
        .img_section{
            z-index: 1;
            .img_box{
                position: relative;
                img{
                    width:100%;
                }
                img.message {
                    position: absolute;
                    left: -10%;
                    width: 230px;
                    top: 40%;
                    overflow: hidden;
                    display: block;
                }
                img.media {
                    width: 280px;
                    display: block;
                    position: absolute;
                    top: -30px;
                    right: -30%;
                }
                img.mouse {
                    width: 70px;
                    position: absolute;
                    bottom: 9px;
                    left: 80%;
                }
            }
            
        }
        &:after {
            content: ' ';
            background: #5956e9;
            width: 1220px;
            height: 1220px;
            left: 60%;
            border-radius: 50%;
            position: absolute;
        }
        &:before {
            content: ' ';
            background: #fbe167;
            width: 200px;
            height: 200px;
            left: -100px;
            top: -100px;
            border-radius: 50%;
            position: absolute;
        }
    }
    
   
`