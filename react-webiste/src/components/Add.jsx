import { Avatar, Box, Fab, Modal, Tooltip, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import styled from "@emotion/styled";

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px'
})

const Add = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
    <Tooltip
    onClick={e=> setOpen(true)}
      title="Add Post"
      sx={{
        position: "fixed",
        bottom: 20,
        left: { xs: "calc(50% - 25px)", md: 30 },
      }}
    >
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Tooltip>
    
<StyledModal
  open={open}
  onClose={e=> setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={300} p={3} bgcolor={"white"} borderRadius={5}>
    <Typography variant="h6" color="gray" sx={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
        Create Post
    </Typography>
    <UserBox>
        <Avatar
        src="https://images.pexels.com/photos/846741/pexels-photo-486741.jpeg"
        sx={{width: 30, height: 30}}
        />
        <Typography variant= 'span' fontWeight={500}>John Doe</Typography>
    </UserBox>
  </Box>
</StyledModal>
</>
  );
};

export default Add;
