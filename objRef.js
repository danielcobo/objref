var objRef = function objRef(obj, path, separator){
	if (typeof separator !== 'string'){
		separator = '/';
	}
	var path = path.split(separator);
	var ref = obj;
	
	for(var i=0; i<path.length; ++i){
		ref = obj[path[i]];
	}
	
	return ref;
};
