import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export function AccordionUsage() {
  return (
    <div>
      <Accordion className="rounded-3xl">
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon className="bg-gradient-to-tl from-sky-100 to-white" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" className="bg-gradient-to-tr from-sky-100 to-white" >Can I save my tweets here ?</Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-gradient-to-l from-sky-50 to-white">
          Yes, you can save your tweets and can ask questions based on them afterwards too
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="bg-gradient-to-tl from-sky-100 to-white" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" className="bg-gradient-to-tr from-sky-100 to-white">Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-gradient-to-r from-sky-50 to-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="bg-gradient-to-tl from-sky-100 to-white" />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="div" className="bg-gradient-to-tr from-sky-100 to-white">Accordion Actions</Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-gradient-to-l from-sky-50 to-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
