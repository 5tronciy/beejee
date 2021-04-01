import React from "react";
import "./SortButton.scss";
import sortUp from "../../assets/sort-up.svg";
import sortDown from "../../assets/sort-down.svg";
import { SORT_ASC, SORT_DESC } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { selectSortingField } from "../../store/tasks/taskSlice";
import { changeSortingField } from "../../store/tasks/actions";

const SortButton = ({ title, fieldName }) => {
  const dispatch = useDispatch();

  const enabled = useSelector(selectSortingField) === fieldName;
  const sortDirection = useSelector((state) => state.tasks.sort_direction);

  const newSortDirection = sortDirection === SORT_ASC ? SORT_DESC : SORT_ASC;
  const icon = newSortDirection === SORT_ASC ? sortUp : sortDown;
  return (
    <div className="sort-button">
      <button
        className="sort-button__button"
        onClick={() =>
          dispatch(
            changeSortingField({
              sortField: fieldName,
              sortDirection: newSortDirection,
            })
          )
        }
      >
        {title}
      </button>
      {enabled && (
        <img className="sort-button__icon" src={icon} alt={sortDirection} />
      )}
    </div>
  );
};

export default SortButton;
