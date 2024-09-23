import React, { useEffect, useRef, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { marginBottom, marginTop } from '../../Gaps'
import WaveSurfer from 'wavesurfer.js';

import { PiPlayCircle } from "react-icons/pi";
import { PiPauseCircle } from "react-icons/pi";
import { responsiveText } from '../../PageBlocks';
import { Spinner } from '../../Spinner';
import { isMobileOnly } from 'react-device-detect';
import { AccordionContentH1, AccordionContentH2 } from './CourseContent';
import { TabletBreakPoint } from '../../../utils/consts';




const CourseAudioContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    min-height: 50px;
    ${marginBottom(45)}
    ${marginTop(36)}
`

const WaveBlock = styled.div`
    flex-grow: 1;
`

const PlayButton = styled.div`
    width: 12%;
    aspect-ratio: 1/1;
    color: ${props => props.theme.colors.text};
    display: flex;
    
    align-items: center;
    ${responsiveText(72, 72, 36)}

    @media (max-width: ${TabletBreakPoint}){
        width: 15%;
    }
`

export interface CourseAudioProps{
    title: string,
    lesson: string,
    audio: string
}
function CourseAudio({title, lesson, audio}: CourseAudioProps) {

    const waveBlockRef = useRef(null);
    const [waveSurfer, setWaveSurfer] = useState<WaveSurfer | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const theme = useTheme()
    const [loading, setLoading]=useState(true)

    const loadAudio = async () => {
        try {
            const response = await fetch(audio);
            const blob = await response.blob();

            if (waveBlockRef.current && !waveSurfer) {
                const wavesurfer = WaveSurfer.create({
                    container: waveBlockRef.current,
                    waveColor: theme.colors.text,
                    progressColor: theme.colors.primary,
                    barGap: 7,
                    barWidth: 5,
                    barRadius: 10,
                    height: isMobileOnly? 40 : 55,
                    cursorWidth: 0
                })

                await wavesurfer.loadBlob(blob)
                setWaveSurfer(wavesurfer)
            }

        } catch (err) {
            alert(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        loadAudio();
    }, [])
    const playClickHandler = () => {

        waveSurfer?.playPause()
        setIsPlaying(prev => !prev)
    }

    return (<div style={{width: '100%'}}>
        <AccordionContentH1>{title}</AccordionContentH1>
        <AccordionContentH2>{lesson}</AccordionContentH2>
        <CourseAudioContainer >
            {loading? <Spinner/> : 
            <PlayButton onClick={playClickHandler}>
                {
                    isPlaying ? <PiPauseCircle /> : <PiPlayCircle />
                }
            </PlayButton>}
            <WaveBlock ref={waveBlockRef}></WaveBlock>
        </CourseAudioContainer>
        </div>
    )
}

export default CourseAudio