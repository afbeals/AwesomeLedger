import React from "react";
import PropTypes from "prop-types";

const ListRow = ({
  classname,
  listData: { date, description, debit, credit }
}) => (
  <div
    className={`${classname} ${
      debit ? `${classname}--pos` : `${classname}--neg`
    }`}
  >
    {date},{description},{debit},{credit}
  </div>
);

ListRow.propTypes = {
  listData: PropTypes.object.isRequired,
  classname: PropTypes.string
};

export default ListRow;
