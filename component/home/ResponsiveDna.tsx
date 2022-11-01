import React from 'react'
import styled from 'styled-components'
export default function ResponsiveDna() {
    return (
        <Root>
            <div className='main_container'>
                <div className='layouts__wrap'>
                    <div className='content'>
                        <h5>Auto Adaptive layouts</h5>
                        <h1>Responsive DNA.</h1>
                        <p>Easily create truly responsive components while deploying production-ready code.</p>
                        <div className='dna_points'>
                            <div>
                                <img src='/svg/layout-1.svg' />
                                <h4>Advanced pinning</h4>
                            </div>
                            <div>
                                <img src='/svg/layout-2.svg' />
                                <h4>Relative positioning with containers</h4>
                            </div>
                            <div>
                                <img src='/svg/layout-3.svg' />
                                <h4>Percentage-based geometry</h4>
                            </div>
                        </div>
                    </div>
                    <div className='img_box'>
                        <img src='/image/layouts-pic-1.png' />
                        <img src='/image/layouts-pic-2.png' className='media' />
                        <img src='/image/layouts-pic-3.png' className='toolbar' />
                        <img src='/image/layouts-pic-4.png' className='cube' />
                        <img src='/image/layouts-pic-5.png' className='bucket' />
                    </div>
                </div>
            </div>
        </Root>
    )
}
const Root = styled.section`
    position: relative;
    padding: 231px 0 165px;
    background: #fff;
    color: #292930;
    .layouts__wrap{
        display:flex;
        align-items: center;
        .content{
            flex:1;
            h5{
                margin-bottom: 24px;
                color: #5956E9;
            }
            h1{
                font-family: 'DM Sans', sans-serif;
                font-size: 80px;
                font-weight: 500;
                margin-bottom: 50px;
            }
            p{
                font-size: 16px;
                color: #999FAE;
                max-width: 400px;
                margin-bottom: 40px;
            }
            }
            .dna_points{
            & > div{
                display: flex;
                align-items: center;
                gap: 10px;
                margin: 20px 0px;
            }
            }
        }
    .img_box{
        flex:2;
        position: relative;
        img{
            width:100%;
        }
        img.media {
            position: absolute;
            width: 160px;
            top: 0px;
            left: 56%;
        }
        img.toolbar {
            position: absolute;
            width: 50px;
            bottom: 14%;
        left: 68%;
        }
        img.cube {
            width: 200px;
            position: absolute;
            left: 18%;
            top: 18%;
        }
        img.bucket {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 300px;
            transform: translate(80px, -100px);
        }
    }   
`