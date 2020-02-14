export default theme => ({
  page: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
});

export const ActiveProjectsStyles = theme => ({
  page: {
    padding: '40px 20px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  noActiveProjectsWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    margin: '50px 0px',
  },
  noActiveMessageWrapper: {
    width: '60%',
    maxWidth: 660,
    margin: '0px auto',
    border: `4px dashed ${theme.palette.grey[300]}`,
    padding: 10,
    borderRadius: 20,
    minHeight: 200,
    backgroundColor: theme.palette.grey[100],
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  noActiveMessage: {
    fontFamily: theme.typography.font.family1,
    fontSize: 26,
    lineHeight: '35px',
    fontWeight: '500',
    color: theme.palette.blueGrey[50],
    textAlign: 'center',
  },
  projectsContainer: {
    marginTop: '20px !important',
  },
});
