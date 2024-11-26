import { Button, ConfigProvider, Input } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Search } from './Components/icons'
import { responsiveText } from './Components/PageBlocks'
import { relative } from 'path'
import { MobileBreakPoint, TabletBreakPoint } from './utils/consts'

const SearchContainer = styled.div<{isOpen?: boolean}>`
    position: relative;
    width: 235px;
    display: flex;
    justify-content: end;
    flex-grow: 1
`

const StyledSearchButton = styled.span`
    display: block;
    cursor: pointer;
     ${responsiveText(32, 32, 24)}
     color: ${({ theme }) => theme.colors.text} !important;
     background-color: unset !important;
     border: none;

     margin-left: .5em;

    @media (max-width: ${MobileBreakPoint}){
        margin-left: 0.5em;
    }
`

const InputContainer=styled.div`
`
const InputStyled=styled(Input)`
    ${responsiveText(14,14,14)}
    color: ${({theme})=>theme.colors.text};


    &::placeholder{
        color: ${({theme})=>theme.colors.text};
        opacity: 0.5;
    }
    @media (min-width: ${MobileBreakPoint}){
        max-width: 200px;
    }


`

function SearchElement() {

    const [isOpen, setIsOpen] = useState(false)
    const [searchValue, setSearchValue]=useState('')

    const onClickHandler=()=>{
        if(!isOpen)
            setIsOpen(true)
        if(isOpen && searchValue===''){
            setIsOpen(false)
        }

        if(isOpen && (searchValue!=='')){
            alert('Поиск '+searchValue)
        }
    }

    return (<ConfigProvider theme={{
        components: {
            Input: {

            }
        }
    }}>
        <SearchContainer>
            {isOpen && <InputStyled
                placeholder='Поиск'
                value={searchValue}
                onChange={(e)=>setSearchValue(e.target.value)}
                
                style={{
                    border: '1px solid white',
                    borderRadius: 8,
                    backgroundColor: 'unset',
                }}/>}
            <StyledSearchButton
            onClick={onClickHandler}
            ><Search /></StyledSearchButton>
        </SearchContainer>
    </ConfigProvider >
    )
}

export default SearchElement