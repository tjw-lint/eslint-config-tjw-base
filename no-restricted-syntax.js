export default const baseRestrictedSyntax = [
  {
    selector: 'Property[method="true"]',
    message: 'No shortform methods. x: function (). not x()'
  }
];
