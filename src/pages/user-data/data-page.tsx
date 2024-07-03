import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IPost } from "../../interfaces/api-data";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Container } from "@mui/material";
import DepartmentList from "./components/department-section";

const DataPage = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (!storedData) {
      navigate("/");
      toast.error("Please register the details to continue...", {
        duration: 3000,
      });
    } else {
      const fetchPosts = async () => {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
          );
          const data: IPost[] = await response.json();
          setPosts(data);
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      };

      fetchPosts();
    }
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 300 },
    { field: "body", headerName: "Body", width: 500 },
  ];

  return (
    <Container>
      <h2>All Posts</h2>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid rows={posts} columns={columns} checkboxSelection />
      </div>
      <div>
        <h2>Department Lists</h2>
        <DepartmentList />
      </div>
    </Container>
  );
};

export default DataPage;
