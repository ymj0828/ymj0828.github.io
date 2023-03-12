$(()=>{

	const graph_span = document.querySelectorAll('.graph span')
	const width_arr = ['90%', '90%', '75%']

	graph_span.forEach((ele, num)=>{
		ele.style.width = width_arr[num]
	});

});