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
          <Typography component="span" className="bg-gradient-to-tr from-sky-100 to-white" >What types of content can I save here?</Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-gradient-to-l from-sky-50 to-white">
          Currently you can save Tweets and YouTube Videos, but we are expanding to support other types of contents also
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="bg-gradient-to-tl from-sky-100 to-white" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" className="bg-gradient-to-tr from-sky-100 to-white">What are all the controls available for me ?</Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-gradient-to-r from-sky-50 to-white">
         You can edit, delete and share individual or entire data with your friend and can stop sharing whenever you want.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="bg-gradient-to-tl from-sky-100 to-white" />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="div" className="bg-gradient-to-tr from-sky-100 to-white">Can I search through my database ?</Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-gradient-to-l from-sky-50 to-white">
          Yes, you can search through your entire database with just few keywords.
        </AccordionDetails>
        {/* <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions> */}
      </Accordion>
    </div>
  );
}
