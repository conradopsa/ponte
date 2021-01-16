import { Box } from "@material-ui/core";

export default function Description(props: any) {
  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center" mt={2} mb={3} color="secondary">
        { props.children }
      </Box>
    </>
  );
}
