

const GetIconNav = ({children, title='', placement='bottom'}) => {
    return(
        <Tooltip title={title} placement={placement}>
            <IconButton>
                {children}
            </IconButton>
        </Tooltip>
    )
} 

export default GetIconNav;