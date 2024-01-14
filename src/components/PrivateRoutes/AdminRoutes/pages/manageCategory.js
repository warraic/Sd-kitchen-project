import React, { useState, useEffect, useContext } from "react";
import UpdateCategoryform from "../AdminComponents/UpdateCategoryform";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ModeIcon from "@mui/icons-material/Mode";
import axios from "axios";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useNavigate } from "react-router";
import Navbar from "../../../navbar/Navbar";
import AdminSidebar from "../../../sidebarAdmin/AdminSidebar";
import { ApiContext } from "../context-for-API/apicontext";

function ManageCategory() {
  const navigate = useNavigate()
  const {isOpen} = useContext(ApiContext);
  const [name, setName] = useState("");
  const [Categories, setCategories] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/auth/category/create-category", {
        name,
      });
      if (data.success) {
        window.alert(`${name} category is created`);
        setName("");
        getAllCategory();
        navigate('/private/auth/manage-category')
      } else {
        window.alert(data.message);
      }
    } catch (error) {
      console.log(error);
      window.alert("Something went wrong in the input form");
    }
  };

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/auth/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      window.alert("Something went wrong in getting categories");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);
  //-------handle update Product  model------\\

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
console.log(open)
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedCategoryName, setUpdatedCategoryName] = useState("");
  //---------------update Product-----------\\
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `/api/auth/category/update-category/${selected._id}`,
        { name: updatedCategoryName }
      );
      if (data.success) {
        window.alert(`Updated successfully`);
        navigate('/private/auth/manage-category')
        //for empty input value
        setSelected(null);
        // set updated name empty
        setUpdatedCategoryName("");
        // after update our popup model will be closed
        setVisible(false);
        //because we get updated value initial time
        getAllCategory();
      } else {
        window.alert(data.message);
      }
     
    } catch (error) {
      console.log(error);
      window.alert("Failed to update Category");
    }
  };
  //-----------------------------------------\\

  const handleDelete = async (categoryId) => {
    try {
      const { data } = await axios.delete(
        `/api/auth/category/delete-category/${categoryId}`
      );
      if (data.success) {
        window.alert(`Category deleted successfully`);
        getAllCategory();
      } else {
        window.alert(data.message);
      }
    } catch (error) {
      console.log(error);
      window.alert("Category deletion failed");
    }
  };

  return (
    <div>
    <Navbar/>
    <div className="container-fluid mt-5 py-2">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex">
          <AdminSidebar/>
          <div className={`w-100 mt-5 ${isOpen? "content_isopen" : "content_close"}`}>
            <Grid sx={{ paddingTop: "70px", backgroundColor: "white", px: 2 }}>
        <Grid item xs={0} sm={0} md={3} lg={3} xl={3}></Grid>
        <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
          {/*-----------------add category----------------------*/}
          <Typography
            variant="h4"
            sx={{
              color: "Teal",
              width: "100%",
              fontWeight: "600",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Add Category
          </Typography>
          <Box style={styles.createcategorysection}>
            <Box>
              <TextField
                sx={{ py: 2 }}
                id="outlined-controlled"
                label="Category Name"
                fullWidth
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Button onClick={handleSubmit} variant="contained">
                + Add Category
              </Button>
            </Box>
          </Box>
          {/*----------------end-add category----------------------*/}
          {/*----------------get all category----------------------*/}

          <Box sx={{ paddingTop: "50px" }}>
            <Typography variant="h4" style={styles.Categoryheading}>
              ALL Category
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="center">Edit</TableCell>
                    <TableCell align="center">Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Categories.map((c) => (
                    <TableRow
                      key={c._id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {c.name}
                      </TableCell>
                      <TableCell align="center">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          onClick={() => {
                            setUpdatedCategoryName(c.name);
                            setVisible(true);
                            setSelected(c);
                            handleOpen(); // Call the handleOpen function
                          }}
                        >
                          <ModeIcon />
                        </button>
                      </TableCell>
                      <TableCell align="center">
                        <Button
                        color="error"                          variant="contained"
                          onClick={() => {
                            handleDelete(c._id);
                          }}
                        >
                          <DeleteForeverOutlinedIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          {/*----------------end get all category----------------------*/}

          {/*------------------update form------------------*/}
          <div
        
            onCancel={() => setVisible(false)}
            visible={visible ? "true" : "false"}
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                   
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <UpdateCategoryform
                    value={updatedCategoryName}
                    setValue={setUpdatedCategoryName}
                    handleSubmit={handleUpdate}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
          {/*------------------update form------------------*/}
        </Grid>
      </Grid>
            </div>
          
          </div>
        </div>
       
      </div>
   </div>
  );
}

export default ManageCategory;

const styles = {
  createcategorysection: {
    width: "100%",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
  },
  Categoryheading: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    color: "Teal",
    fontWeight: "700",
    fontSize: "20px",
  },
};
