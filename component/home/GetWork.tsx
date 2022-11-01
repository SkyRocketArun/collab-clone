import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
export default function GetWork() {
    return (
        <Root>
            <div className='main_container'>
                <div className='content_box'>
                    <h5>Collaboration Redefined</h5>
                    <h1>Get Work<br /> Done <span>together</span></h1>
                </div>
                <div className='circle_section'>
                    <img src='/svg/layout-1.svg' alt='cube' />
                    <h2>Let your personalized Collab assistant do the heavy lifting while you focus on creating.</h2>
                    <Link href='#'>Find out more</Link>
                </div>
            </div>
        </Root>
    )
}
const Root = styled.section`
    position: relative;
    height: 923px;
    margin-bottom: 239px;
    padding: 148px 0 0;
    background: #FAB8C4;
    .content_box{
        h5{
            margin-bottom: 16px;
            color: #C75C6F;
        }
        h1{
            color:#3A38BF;
            font-size: 140px;
            font-weight: 700;
            span{
                color:#fff;
            }
        }
    }
    .circle_section {
        width: 500px;
        height: 500px;
        padding: 0 90px 35px 95px;
        border-radius: 50%;
        background: #5956E9;
        display: flex;
        align-items: self-start;
        flex-direction: column;
        justify-content: center;
        margin-left: auto;
        margin-top: 60px;
        h2{
            margin-bottom: 24px;
            font-size: 22px;
            line-height: 1.5;
            font-weight: 500;
        }
        img{
            margin-bottom: 24px;
            width: 40px;
            height: 40px;
        }
        a{
            font-weight: 500;
            color: rgba(255, 255, 255, 0.5);
        }
    }
`