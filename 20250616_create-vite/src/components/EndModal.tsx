type props = {
    showEndModal :boolean,
}

export const EndModal = (props : props) => {
    return (
        <>
            {props.showEndModal && (<div>終了</div>)}
        </>
    )
}