
import React, { useEffect, useRef, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { marginBottom } from '../../Gaps'
import { responsiveText } from '../../PageBlocks';
import { AccordionContentH1, AccordionContentH2 } from './CourseContent';
import { Link } from "react-router-dom";
import { AiOutlineLink } from "react-icons/ai";


const CourseLinkContainer = styled(Link)`
    width: 100%;
    display: flex;
    
    ${marginBottom(45)}
    text-decoration: none;
    color: ${props=>props.theme.colors.text};
    ${responsiveText(84,84,40)}

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


export interface CourseLinkProps{
    title: string,
    link: string
}
function CourseLink({title, link}: CourseLinkProps) {

    return (
        <CourseLinkContainer target="_blank" to={link}>
            <AiOutlineLink/>
            <div>
            <AccordionContentH1>{title}</AccordionContentH1>
            <AccordionContentH2>{link}</AccordionContentH2>
            </div>
        </CourseLinkContainer>
    )
}

export default CourseLink