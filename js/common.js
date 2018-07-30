function GetQueryString(name) {
	   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
	   var r = window.location.search.substr(1).match(reg);
	   if (r!=null) return (r[2]); return null;
	}
var language_id=GetQueryString("language_id");
console.log(language_id);
if(language_id == null){
	language_id = '1';
}
var json = [];
if(!window.localStorage) {
	alert("浏览器支持localStorage")
} else {
	var storage = window.localStorage;
	$.ajax({
		type: 'POST',
		url: 'get_location.php',
		data: {
				'language_id': language_id,
			},
		dataType: 'JSON',
		cache: false,
		async: false,
		success: function(data) {
			json = data.data;
		},
		error: function(jqXHR) {
			console.log(jqXHR.status);
		}
	});
}
storage.setItem('datalocation', JSON.stringify(json));

var datalocation = storage.getItem('datalocation');
datalocation = JSON.parse(datalocation);
var cSector = false;
var cLocation = false;
var notification = [];
var template_id;
var region_id;
var common = {
	validate: function() {
		$('.vLocation').html('');
		$('.vReceivers').html('');
		if(cSector == false) {
			$('.vLocation').html('plase choose a Sector!');
			console.log(1);
			return
		} else if(cSector != false && cLocation == false) {
			$('.vReceivers').html('plase choose a Location!');
			console.log(2);
			return;
		}
	},
	checkSector: function() {
		$('.cSector input:checkbox').change(function() {
			cSector = $('#cYoga').prop('checked') && $('#cFitness').prop('checked') == true ? 'all' : ($('#cYoga').prop('checked') == true ? 'yoga' : 'fitness');
			cSector = $('#cYoga').prop('checked') || $('#cFitness').prop('checked') == true ? cSector : false;
			console.log(cSector);
			$('.vLocation').html('');
		})

		$('.cLocation input:radio').each(function() {
			$(this).change(function() {
				console.log(cSector);
				cLocation = $(this).val();
				console.log(cLocation);
				if(cSector == false) {
					//				$('.vLocation').html('plase choose a Sector!');
					common.validate();
					cSector = false;
					return;
				} else {
					//				$('.vLocation').html('');
					common.validate();
					return;
				}

			})
		})
	},
	byLocation: function() {
		if(cLocation == 'hongkong' && cSector == 'all') {
			html = '';
			html2 = '';
			locations = [];
			for(var i = 0; i < datalocation.is_fitness.HK.length; i++) {
				locations.push(datalocation.is_fitness.HK[i]);
			}
			for(var i = 0; i < datalocation.is_yoga.HK.length; i++) {
				locations.push(datalocation.is_yoga.HK[i]);
			}
			console.log(locations);
			for(var i = 0; i < locations.length; i++) {
				html2 += '<option value="' + locations[i].location_id + '">' + locations[i].location_name + '</option>'
				html += '<div class="row"><label class="checkbox-inline pull-left ml10"> <input type="checkbox" data-id = "' + locations[i].location_id + '" value="' + locations[i].location_name + '">' + locations[i].location_name + '</label></div>'
			}
			$('#Modal-location .modal-body').html(html);
			$('.select_location').html(html2);
		}
		if(cLocation == 'hongkong' && cSector == 'fitness') {
			html = '';
			html2 = '';
			locations = [];
			for(var i = 0; i < datalocation.is_fitness.HK.length; i++) {
				locations.push(datalocation.is_fitness.HK[i]);
			}
			console.log(locations);
			for(var i = 0; i < locations.length; i++) {
				html2 += '<option value="' + locations[i].location_id + '">' + locations[i].location_name + '</option>'
				html += '<div class="row"><label class="checkbox-inline pull-left ml10"> <input type="checkbox" data-id = "' + locations[i].location_id + '" value="' + locations[i].location_name + '">' + locations[i].location_name + '</label></div>'
			}
			$('.select_location').html(html2);
			$('#Modal-location .modal-body').html(html);
		}
		if(cLocation == 'hongkong' && cSector == 'yoga') {
			html = '';
			html2 = '';
			locations = [];
			for(var i = 0; i < datalocation.is_yoga.HK.length; i++) {
				locations.push(datalocation.is_yoga.HK[i]);
			}
			console.log(locations);
			for(var i = 0; i < locations.length; i++) {
				html2 += '<option value="' + locations[i].location_id + '">' + locations[i].location_name + '</option>'
				html += '<div class="row"><label class="checkbox-inline pull-left ml10"> <input type="checkbox" data-id = "' + locations[i].location_id + '" value="' + locations[i].location_name + '">' + locations[i].location_name + '</label></div>'
			}
			$('#Modal-location .modal-body').html(html);
			$('.select_location').html(html2);
		}
		if(cLocation == 'taiwan' && cSector == 'all' || cLocation == 'taiwan' && cSector == 'yoga') {
			html = '';
			html2 = '';
			locations = [];
			for(var i = 0; i < datalocation.is_yoga.TW.length; i++) {
				locations.push(datalocation.is_yoga.TW[i]);
			}
			console.log(locations);
			for(var i = 0; i < locations.length; i++) {
				html += '<div class="row"><label class="checkbox-inline pull-left ml10"> <input type="checkbox" data-id = "' + locations[i].location_id + '" value="' + locations[i].location_name + '">' + locations[i].location_name + '</label></div>'
				html2 += '<option value="' + locations[i].location_id + '">' + locations[i].location_name + '</option>'
			}
			$('#Modal-location .modal-body').html(html);
			$('.select_location').html(html2);
		}
		if(cLocation == 'singapore' && cSector == 'all') {
			html = '';
			html2 = '';
			locations = [];
			for(var i = 0; i < datalocation.is_fitness.SG.length; i++) {
				locations.push(datalocation.is_fitness.SG[i]);
			}
			for(var i = 0; i < datalocation.is_yoga.SG.length; i++) {
				locations.push(datalocation.is_yoga.SG[i]);
			}
			console.log(locations);
			for(var i = 0; i < locations.length; i++) {
				html2 += '<option value="' + locations[i].location_id + '">' + locations[i].location_name + '</option>'
				html += '<div class="row"><label class="checkbox-inline pull-left ml10"> <input type="checkbox" data-id = "' + locations[i].location_id + '" value="' + locations[i].location_name + '">' + locations[i].location_name + '</label></div>'
			}
			$('#Modal-location .modal-body').html(html);
			$('.select_location').html(html2);

		}
		if(cLocation == 'singapore' && cSector == 'yoga') {
			html = '';
			html2 = '';
			locations = [];
			for(var i = 0; i < datalocation.is_yoga.SG.length; i++) {
				locations.push(datalocation.is_yoga.SG[i]);
			}
			console.log(locations);
			for(var i = 0; i < locations.length; i++) {
				html2 += '<option value="' + locations[i].location_id + '">' + locations[i].location_name + '</option>'
				html += '<div class="row"><label class="checkbox-inline pull-left ml10"> <input type="checkbox" data-id = "' + locations[i].location_id + '" value="' + locations[i].location_name + '">' + locations[i].location_name + '</label></div>'
			}
			$('#Modal-location .modal-body').html(html);
			$('.select_location').html(html2);

		}
		if(cLocation == 'singapore' && cSector == 'fitness') {
			html = '';
			html2 = '';
			locations = [];
			for(var i = 0; i < datalocation.is_fitness.SG.length; i++) {
				locations.push(datalocation.is_fitness.SG[i]);
			}
			console.log(locations);
			for(var i = 0; i < locations.length; i++) {
				html2 += '<option value="' + locations[i].location_id + '">' + locations[i].location_name + '</option>'
				html += '<div class="row"><label class="checkbox-inline pull-left ml10"> <input type="checkbox" data-id = "' + locations[i].location_id + '" value="' + locations[i].location_name + '">' + locations[i].location_name + '</label></div>'
			}
			$('#Modal-location .modal-body').html(html);
			$('.select_location').html(html2);
		}
		if(cLocation == 'shanghai' && cSector == 'all' || cLocation == 'shanghai' && cSector == 'yoga') {
			html = '';
			html2 = '';
			locations = [];
			for(var i = 0; i < datalocation.is_yoga.SH.length; i++) {
				locations.push(datalocation.is_yoga.SH[i]);
			}
			console.log(locations);
			for(var i = 0; i < locations.length; i++) {
				html2 += '<option value="' + locations[i].location_id + '">' + locations[i].location_name + '</option>'
				html += '<div class="row"><label class="checkbox-inline pull-left ml10"> <input type="checkbox" data-id = "' + locations[i].location_id + '"  value="' + locations[i].location_name + '">' + locations[i].location_name + '</label></div>'
			}
			$('#Modal-location .modal-body').html(html);
			$('.select_location').html(html2);
		}
	},
	typeAndClass: function() {
		var classType = '<option value="all">All</option>';
		var teacher = '<option value="all">All</option>';
		$.ajax({
			type: "POST",
			url: "teacher_classType.php",
			cache: false,
			async: false,
			data: {
				'location_id': $('.select_location').val(),
			},
			dataType: 'JSON',
			success: function(data) {
				console.log(data);

				for(var i = 0; i < data.class.length; i++) {
					classType += '<option value="' + data.class[i].class_type_id + '">' + data.class[i].name + '</option>'
				}
				for(var i = 0; i < data.teacher.length; i++) {
					teacher += '<option value="' + data.teacher[i].teacher_id + '">' + data.teacher[i].first_name + '</option>'
				}
				$('.select_teacher').html(teacher);
				$('.select_type').html(classType);
			},
			error: function(jqXHR) {
				console.log(jqXHR.status);
			}

		});
	},
	findClass: function() {
		var txt1 = '';
		$.ajax({
			type: 'POST',
			url: 'get_classes.php',
			dataType: 'JSON',
			data: {
				'location_id': $('.select_location').val(),
				'get_date': $('.form_datetime2').val(),
				'teacher': $('.select_teacher').val(),
				'class_type': $('.select_type').val(),
			},

			cache: false,
			async: false,
			success: function(data) {
				console.log(data);
				if(data.state == false) {
					txt1 = ''
					txt1 = "<h2>No Result</h2>";
				} else {
					txt1 = ''
					for(var i = 0; i < data.data.length; i++) {
						txt1 += '<li class="list-group-item" data-id="' + data.data[i].id + '"><span class="glyphicon glyphicon-plus select_result"></span>&nbsp;' + data.data[i].name + '</li>'
					}
				}
				$('.results_class').html(txt1);
				common.selectClass();

			},
			error: function(jqXHR) {
				console.log(jqXHR.status);
			}
		})
	},
	selectClass: function() {
		$('#Modal-class .select_result').each(function() {
			$(this).on('click', function() {
				$(this).attr("class", "glyphicon glyphicon-minus removeClass");
				$('.classes').append($(this).parent());
				common.removeClass();
			})

		})

	},
	selectClient: function() {
		$('#Modal-clients .select_result').each(function() {
			$(this).on('click', function() {
				$(this).attr("class", "glyphicon glyphicon-minus removeClass");
				$('.clients').append($(this).parent());
				common.removeClient();
			})

		})

	},
	removeClient: function() {
		$('#Modal-clients .removeClass').each(function() {
			$(this).on('click', function() {
				$(this).attr("class", "glyphicon glyphicon-plus select_result");
				$('#Modal-clients .results_client').append($(this).parent());
				common.selectClient();
			})
		})
	},
	removeClass: function() {
		$('#Modal-class .removeClass').each(function() {
			$(this).on('click', function() {
				$(this).attr("class", "glyphicon glyphicon-plus select_result");
				$('#Modal-class .results_class').append($(this).parent());
				common.selectClass();

			})
		})
	},
	selectReceivers: function(val) {
		var selected = [];
		var locations = [];
		var html;
		var html2;
		if(cSector == false) {
			//			$('.vReceivers').html('plase choose a Sector!');
			common.validate();
			return
		} else if(cSector != false && cLocation == false) {
			common.validate();
			return
		} else if(cSector != false && cLocation != false) {
			//			$('.vReceivers').html('');
			common.validate();
			switch(val) {
				case 'location':
					selected = '';
					$('#Modal-location').modal('show');
					common.byLocation();
					$('#Modal-location input:checkbox').change(function() {
						$('.select').html('');
						if($(this).prop('checked') == true) {
							if(selected != ''){
								selected += ','+ $(this).val();
							}else{
								selected += $(this).val();
							}
							notification.push($(this).attr('data-id'));
							$('.select').html(selected);
						}
					});
					break;
				case 'class':
					selected = '';
					$('#Modal-class').modal('show');
					common.byLocation();
					common.typeAndClass();
					common.findClass();
					$('.doneClass').on('click', function() {
						$('#Modal-class .classes li').each(function() {
							$('.select').html('');
							notification.push($(this).attr('data-id'));
							if(selected != ''){
								selected += ','+ $(this).text();
							}else{
								selected += $(this).text();
							}
							notification.push($(this).attr('data-id'));
							$('.select').html(selected);
						})
					})
					break;
				case 'client':
					selected = '';
					$('#Modal-clients').modal('show');

					$('#Modal-clients .clients li').each(function() {
						$('.select').html('');
						if(selected != ''){
								selected += ','+ $(this).text();
							}else{
								selected += $(this).text();
							}
						$('.select').html(selected);
						console.log(selected);
					})
					$('.doneClient').on('click', function() {
						$('#Modal-clients .clients li').each(function() {
							notification.push($(this).attr('data-id'));

							if(selected != ''){
								selected += ','+ $(this).text();
							}else{
								selected += $(this).text();
							}
							$('.select').html(selected);
						})
					})
					break;
				default:
					break;
			}
		}

	},
	searchClients: function() {
		var txt1;
		$.ajax({
			type: 'POST',
			url: 'get_client.php',
			dataType: 'JSON',
			data: {
				'client': $('.search_clients').val()
			},
			cache: false,
			async: false,
			success: function(data) {
				console.log(data);
				if(data.state == false) {
					console.log(1);
					txt1 = ''
					txt1 = "<h2>No Result</h2>";
				} else {
					txt1 = ''
					for(var i = 0; i < data.date.length; i++) {
						txt1 += '<li class="list-group-item" data-id="' + data.date[i].id + '"><span class="glyphicon glyphicon-plus select_result"></span>&nbsp;' + data.date[i].id + '-' + data.date[i].first_name + '&nbsp;' + data.date[i].last_name + '(' + data.date[i].username + ')' + '</li>'
					}
				}
				$('.results_client').html(txt1);
				common.selectClient()

			},
			error: function(jqXHR) {
				console.log(jqXHR.status);
			}

		})
	},
	selectTemplate: function() {
		var html;
		var html2;
		$('#chooseTemplate').change(function() {
			if($(this).prop('checked') == true) {
				$('#Modal-template').modal('show');
				$.ajax({
					type: 'POST',
					url: './get_notification.php',
					data: {
						'html': 'index',
					},
					dataType: 'JSON',
					cache: false,
					async: false,
					success: function(data) {
						html = '';
						if(data.state == false) {
							html = '<h2>No template</h2>'
						} else {
							for(var i = 0; i < data.notification_template.length; i++) {
								html += '<tr><td><input type="radio" name="template" id="template" value="" data-region="' + data.notification_template[i].region_id + '" data-id="' + data.notification_template[i].id + '" /></td><td class="template_description">' + data.notification_template[i].description + '</td><td class="template_title">' + data.notification_template[i].title + '</td><td class="template_content">' + data.notification_template[i].content + '</td><td><span class="glyphicon glyphicon-edit update-btn"></span>&nbsp;<span class="glyphicon glyphicon-trash delete-btn"></span></td></tr>'
							}
							for(var j = 0; j < data.regions.length; j++) {
								html2 += '<option value="' + data.regions[j].id + '">' + data.regions[j].region_code + '</option>'
							}
						}
						$('#Modal-template tbody').html(html);
						$('.region_select').html(html2);
						common.doneTemplate();
						common.saveTemplate();
					},
					error: function(jqXHR) {
						console.log(jqXHR.status);
					}
				});
				return;
			} else {
				return;
			}
		})
	},
	doneTemplate: function() {
		$('.doneTemplate').on('click', function() {
			$('#Modal-template tbody input:radio').each(function() {
				if($(this).prop('checked') == true) {
					$('.input_title').val($(this).parent().parent().find('.template_title').text());
					$('.input_content').val($(this).parent().parent().find('.template_content').text());
					template_id = $(this).attr('data-id');
					region_id = $(this).attr('data-region');
				} else {
					$('#chooseTemplate').prop('checked', false);
				}
			})
		})
	},
	saveTemplate: function() {
		$('.update-btn').on('click', function() {
			$('#Modal-template').modal('hide');
			$('#Modal-add_edit').modal('show');
			$('.update_title').val($(this).parent().parent().find('.template_title').text());
			$('.update_content').val($(this).parent().parent().find('.template_content').text());
			$('.update_description').val($(this).parent().parent().find('.template_description').text());
		});
		$('.delete-btn').on('click', function() {
			if(window.confirm('Are you sure to delete this template?')) {
				console.log($(this).parent().parent());
				$(this).parent().parent().remove();
				return
			} else {
				return
			}
		});

	},
	submitNotification: function() {
		if(notification == '' || $('.input_title').val() == '' || $('.input_content').val() == '') {
			alert('Incomplete information');
		} else {
			var isLocation = $('#byLocation').prop('checked');
			var isClass = $('#byClass').prop('checked');
			var isClient = $('#byClient').prop('checked');
			var url = isLocation ? '' : (isClass ? 'send_email.php' : 'send_email_by_client.php');
			$.ajax({
				type: 'POST',
				url: url,
				data: {
					'notification_template_id': template_id,
					'class_id': notification,
					'content': $('.input_content').val(),
					'send_email_title': $('.input_title').val(),
					'region_id': region_id,
				},
				dataType: 'JSON',
				cache: false,
				async: false,
				success: function(data) {
					var text = '<b>' + data.info + '</b>';
					$('#Modal-message').modal('show');
					$('#Modal-message .modal-body').html(text);
				},
				error: function(jqXhr) {
					console.log(jqXhr.status);
				}

			})
		}

	},

}

//$('.receivers input:radio').change(function() {
//	console.log($(this).val());
//	common.selectReceivers($(this).val());
//})
$('.receivers input:radio').on('click', function() {
	console.log($(this).val());
	common.selectReceivers($(this).val());
})
$('.add_edit').on('click', function() {
	$('#Modal-template').modal('hide');
	$('.update_title').val('');
	$('.update_content').val('');
	$('.update_description').val('');
	$('#Modal-add_edit').modal('show');
});
$('.edit_save').on('click', function() {
	$.ajax({
		type: "post",
		url: "get_notification.php",
		data: {
			'html': 'add',
			'email_title': $('.update_title').val(),
			'email_content': $('.update_content').val(),
			'email_description': $('.update_description').val(),
			'email_region_id': $('.region_select').val(),
		},
		dataType: 'JSON',
		cache: false,
		async: false,
		success: function(data) {
			console.log(data);
		},
		error: function(jqXHR) {
			console.log(jqXHR.status);
		}
	});
})
$('#Modal-class select').change(function() {
	common.findClass();
})
$('#Modal-class .select_location').change(function() {
	common.typeAndClass();
})
$('.form_datetime2').change(function() {
	common.findClass();
})
$('.search_clients').on('blur', common.searchClients);
$('.submit_btn').on('click', common.submitNotification);
$('.preview').on('click', function(){
	var cRegoinval = '';
	if(cLocation == 'hongkong'){
		cRegoinval = 'Hong Kong';
	}else if(cLocation == 'taiwan'){
		cRegoinval = 'Taiwan';
	}else if(cLocation == 'singapore'){
		cRegoinval = 'Singapore';
	}else if(cLocation == 'shanghai'){
		cRegoinval = 'Shang Hai';
	}
	var cccc = $('.select').html();
	var ss = cccc.split(",");
	var cReceivers = '';
	for(var i = 0; i < ss.length; i++){
		cReceivers += ss[i]+' <br/> ';
	}
	var cSectorval = $('#cYoga').prop('checked') && $('#cFitness').prop('checked') == true ? 'all' : ($('#cYoga').prop('checked') == true ? 'Yoga' : 'Fitness');
	$('.cRegoin').text(cRegoinval);
	$('.ccSector').text(cSectorval);
	$('.cReceivers').html(cReceivers);
	$('.cTitle').text($('.input_title').val());
	$('.cContent').text($('.input_content').val());
	$('.cDateTime').text($('.form_datetime').val()+' '+$('.form_withtime').val());
	// $('.cNotificationType').text($("#push").val());
	$('#Modal-preview').modal('show');
});
$('#send_immed').on('click',function(){
	if($('#send_immed').prop('checked') == true){
		$('.form_datetime').attr('disabled','disabled');
		$('.form_withtime').attr('disabled','disabled');
	}else{
		$('.form_datetime').removeAttr('disabled')
		$('.form_withtime').removeAttr('disabled');
	}
});
common.checkSector();
common.selectTemplate();
common.saveTemplate();