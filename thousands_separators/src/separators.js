'use strict';

<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

function thousands_separators(num)
{

 <fmt:formatNumber type="number" value="1000000" /> }



module.exports = thousands_separators;
