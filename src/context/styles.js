import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  link: {
    borderRadius: 5,
    borderWidth: 1,
    margin: 2,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
  },
  col: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
  },
  row_start: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    flexWrap: 'wrap',
  },
  text: {
    justifyContent: 'flex-start',
    width: '100%',
  },
  tr: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 3,
    borderWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 4,
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  td: {
    borderLeftWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 4,
    // height: '100%',
    textAlign: 'left',
    textAlignVertical: 'center',
  },
});
