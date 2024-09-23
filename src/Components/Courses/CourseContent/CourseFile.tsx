import { AiOutlineFile } from "react-icons/ai";
import React, { useEffect, useRef, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { marginBottom } from '../../Gaps'
import { PiPlayCircle } from "react-icons/pi";
import { PiPauseCircle } from "react-icons/pi";
import { responsiveText } from '../../PageBlocks';
import { parseBlob } from 'music-metadata-browser';
import { Spinner } from '../../Spinner';
import { isMobileOnly } from 'react-device-detect';
import { AccordionContentH1, AccordionContentH2 } from './CourseContent';
import { Link } from "react-router-dom";
import mockFile from '../../../files/Презентация с уроками.pdf'


const CourseDocumentContainer = styled(Link)`
    width: 100%;
    display: flex;
    
    ${marginBottom(45)}
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    ${responsiveText(84, 84, 39)}

`

async function getFileMetadata(url: string) {
    const response = await fetch(url, { method: 'HEAD' });
    const contentType = response.headers.get('Content-Type');
    const contentLength = response.headers.get('Content-Length');

    return {
        contentType: contentType,
        contentLength: contentLength
    };
}


export interface CourseFileProps {
    title: string,
    link: string
}
function CourseFile({title, link}: CourseFileProps) {

    const [loading, setLoading] = useState(true)
    const [fileMetadata, setFileMetadata] = useState({ contentType: 'File', contentLength: '' })

    function formatFileSize(bytes: number) {
        if (bytes < 1024) {
            return `${bytes} Б`;
        } else if (bytes < 1024 * 1024) {
            return `${(bytes / 1024).toFixed(1)} КБ`;
        } else {
            return `${(bytes / (1024 * 1024)).toFixed(1)} МБ`;
        }
    }

    useEffect(() => {
        getFileMetadata(mockFile).then((resp) => {
           
            const contentType = resp.contentType?.split('/')[1] ?? 'FILE'
            const contentLength = formatFileSize(parseFloat(resp.contentLength ?? '0'))
            setFileMetadata({ contentType, contentLength })
            setLoading(false)
        })
    }, [])

    return (loading ? <Spinner /> : <>
        <CourseDocumentContainer target="_blank" to={link}>
            <AiOutlineFile />
            <div>
                <AccordionContentH1>{title}</AccordionContentH1>
                <AccordionContentH2>{`${fileMetadata.contentType}, ${fileMetadata.contentLength}`}</AccordionContentH2>
            </div>
        </CourseDocumentContainer>
    </>
    )
}

export default CourseFile