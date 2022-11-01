import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'
export default function Feature() {
    const [data, setData] = useState(Array)
    return (
        <Root>
            <div className='main_container'>
                <div className='top_section'>
                    <div><h3>Features</h3></div>
                    <div>
                        <h1>The world’s most powerful design tool.</h1>
                        <p>Simultaneously design, code and collaborate with your team all from one place.</p>
                    </div>
                </div>
                <h1>Slider section under development</h1>
                <div className='slider_section'>
                    <div>
                        {data.map((i, ix) => {
                            return (
                                <div key={ix}>
                                    <img src={i.img} alt={i.title} />
                                    <h2>{i.title}</h2>
                                    <p>{i.description}</p>
                                    <Link href={i.link}>Find our more</Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Root>
    )
}
const Root = styled.section`
    background:#27272e;
    overflow-x: clip;
    padding: 100px 0px;
    .top_section {
        display: flex;
        position: relative;
        padding-bottom: 90px;
        &>div:first-child{
            flex:1;
        }
        &>div:last-child{
            flex:3;
        }
        & > div {
            h1{
                font-family: 'DM Sans', sans-serif;
                font-size: 80px;
                font-weight: 500;
                margin-bottom: 48px;
            }
            p{
                max-width: 505px;
                color: #ffffff80;
                font-size: 18px;
            }
        }
        &::after{
            content: '';
            position: absolute;
            bottom: 0px;
            width: 90%;
            height: 1px;
            background: #FFBABA;
            right: 0px;
            transform: translateX(80%);
        }
    }
    .slider_section{

    }
`
const Array = [
    {
        id: 1,
        title: '',
        img: 'https://ui8-collab.herokuapp.com/img/camera.png',
        description: 'Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.',
        link: '#',
    },
    {
        id: 2,
        title: '',
        img: 'https://ui8-collab.herokuapp.com/img/calendar.png',
        description: 'Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.',
        link: '#',
    },
    {
        id: 3,
        title: '',
        img: 'https://ui8-collab.herokuapp.com/img/camera.png',
        description: 'Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.',
        link: '#',
    },
    {
        id: 4,
        title: '',
        img: 'https://ui8-collab.herokuapp.com/img/calendar.png',
        description: 'Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.',
        link: '#',
    },
]