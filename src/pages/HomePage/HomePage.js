import { Container } from "react-bootstrap";
import ButtonsBar from "../../components/ButtonsBar";
import TasksList from "../../components/TasksList";
import CreateTaskModal from "../../components/CreateTaskModal";
import ReactPaginate from "react-paginate";
import React from "react";
import "./HomePage.scss";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../store/tasks/actions";
import { selectPagesCount } from "../../store/tasks/taskSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  const pageCount = useSelector(selectPagesCount);

  return (
    <>
      <Container>
        <ButtonsBar />
        <TasksList />
        {pageCount > 1 && (
          <ReactPaginate
            previousLabel="Back"
            nextLabel="Forward"
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={({ selected }) => dispatch(changePage(selected + 1))}
            containerClassName="pagination"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            activeClassName={"active"}
          />
        )}
      </Container>
      <CreateTaskModal />
    </>
  );
};

export default HomePage;
