import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import _enterComment from "./_enterComment";
import _viewComments from "./_viewComments";

export default function _comment({ expanded }) {
  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <_enterComment />
        <_viewComments />
      </CardContent>
    </Collapse>
  );
}
