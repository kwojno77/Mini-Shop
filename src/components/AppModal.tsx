import { styled } from "@mui/material";
import React from "react";

interface IAppModal {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    content: React.ReactNode | string;
    actions?: React.ReactNode;
}

export const AppModal: React.FC<IAppModal> = ({ isOpen, setIsOpen, title, actions, content }) => {
    if (!isOpen) {
        return <></>;
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    // const StyledModalWrapper = styled('div')(() => ({
    //     position: 'absolute',
    //     inset: 0,
    //     width: '100%',
    //     height: '100%',
    //     // filter: 'blur(5px)', TODO
    // }));

    const StyledModal = styled('div')(() => ({
        position: 'fixed',
        top: '50%',
        left: '50%',
        borderRadius: '0.5em',
        backgroundColor: '#efe6b7',
        minWidth: '30vw',
        transform: 'translateX(-50%) translateY(-50%)',
    }));

    const StyledHeader = styled('header')(() => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: '0.5em 0.5em 0 0',
        backgroundColor: '#d7c87c',
        padding: '0.5em',
        gap: '0.5em',
    }))

    const StyledContent = styled('div')(() => ({
        padding: '0.5em',
    }))

    const StyledDivider = styled('div')(() => ({
        width: '100%',
        height: '1px',
        backgroundColor: '#213547',
    }))

    const StyledFooter = styled('footer')(() => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: '0 0 0.5em 0.5em',
        padding: '0.5em',
    }))

    // return 
    // <StyledModalWrapper>
    return <StyledModal id={`modal-${title}`}>
            <StyledHeader>
                <h1>{ title }</h1>

                <button onClick={handleClose}>X</button>
            </StyledHeader>

            <StyledContent>
                { content }
            </StyledContent>

            {/* @ts-ignore TODO fix*/}
            { !!actions ?? <StyledDivider/>}

            {/* @ts-ignore TODO fix*/}
            { !!actions ?? <StyledFooter>
                <button onClick={handleClose}>Cancel</button>

                { actions }
            </StyledFooter> }
        </StyledModal>;
    // </StyledModalWrapper>;
}
