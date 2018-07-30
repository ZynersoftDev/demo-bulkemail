<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml2/DTD/xhtml1-strict.dtd">
<html>

	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1,user-scalable=0" />
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>Bulk Email Sending Demo</title>
		
		<link rel="stylesheet" type="text/css" href="css/notification.css" />
		<link rel="stylesheet" href="css/bootstrap.min.css" />
		<link rel="stylesheet" type="text/css" href="css/base.css" />
		<link rel="stylesheet" href="css/bootstrap-datetimepicker.min.css" />
		
		<script language="JavaScript" type="text/javascript" src="js/jquery.min.js"></script>
		<script src="js/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/bootstrap-datetimepicker.js" type="text/javascript" charset="utf-8"></script>
		<!--<script src="js/moment.js" type="text/javascript" charset="utf-8"></script>-->
		
		
	</head>

	<body>
		<header class="w1000 m0auto">
			<div class="mt20">
				<h3 class="f30 fb">Bulk Email Sending Demo</h3>
			</div>
		</header>
		<div class="w1000 container pt30">
			<div class="row">
				<div class="col-lg-12 pull-left text-left pt20 cLocation">
					<label for="">Target Region</label>
					<div>
						<label class="radio-inline"> <input type="radio" id="" name="location" value="hongkong">Hong Kong</label>
						<label class="radio-inline"> <input type="radio" id="" name="location" value="taiwan">Taiwan</label>
						<label class="radio-inline"> <input type="radio" id="" name="location" value="singapore">Singapore</label>
						<label class="radio-inline"> <input type="radio" id="" name="location"  value="shanghai">Shang Hai</label>
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-lg-12 pull-left text-left pt20 receivers">
					<label for="">Target Receivers</label>
					<div>
						Send by Client(s) : <input type="text" id="username" value="" />
					</div>
					<span class="vReceivers red"></span>
					<br />
					<b>Selected:</b><span class="select green"></span>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12 pull-left text-left pt20">
					<label class="checkbox-inline"> 
						<input type="checkbox" id="chooseTemplate"  value="template">Do you want to use template
					</label>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12 pull-left text-left pt20">
					<label for="title">Notification Title</label>
					<input type="text" class="form-control input_title" name="title" id="input_title" placeholder="Input box for title">
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12 pull-left text-left pt20">
					<label for="title">Notification Content</label>
					<textarea class="form-control input_content"id="input_content" rows="4" placeholder="Input box for content"></textarea>
					<br />
					<label class="checkbox-inline"> <input type="checkbox" id="save_template" value="template">Save a new template?</label>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-3 text-left pt20">
					<b>Target Send Out Date Time:</b>
				</div>
				<div class="col-md-3 text-left pt20">
					send immediately : 
					<input type="date" name="" disabled id="datetime" value="" style="line-height: 24px;" />
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12 pull-left text-left pt20">
					<label for="">Notification Type</label>
					<div>
						<label class="radio-inline"> <input type="radio" id="" disabled  name="push" value="app">Push Notification(App)</label>
						<label class="radio-inline"> <input type="radio" id=""checked="checked" name="push" value="email">Email</label>
						<label class="radio-inline"> <input type="radio" id="" disabled name="push" value="both">Both</label>
					</div>
				</div>
			</div>
		</div>
		<footer class="w1000 m0auto pb30">
			<div class="container">
				<div class="btn-group btn-group-lg">
					<button type="submit" class="btn btn-default preview" id='preview'>&nbsp;Submit&nbsp;</button>
					<!-- <button type="submit" class="btn btn-default submit_btn">&nbsp;Send Immediately&nbsp;</button> -->
				</div>
			</div>
		</footer>
		<!-- Modal public -->

		<div class="modal fade" id="Modal-template" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog w800">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
					&times;
					</button>
						<h4 class="modal-title" id="myModalLabel">
					Notification Template
				</h4>
					</div>
					<div class="modal-body">
						<div class="row">
							<!--<div class="col-lg-12 text-right">
								<button class="btn btn-default add_edit">Add New Template</button>
							</div>-->
						</div>
						<table class="table table-striped">
							<thead>
								<tr>
									<th class="text-center">&nbsp;</th>
									<th class="text-center">Descriptionth</th>
									<!--<th class="text-center">Title</th>
									<th class="text-center">Content</th>-->
									<th class="text-center">&nbsp;</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<label class="radio-inline"> <input type="radio" class="Template" attrtype='Template' name="maban" value="1">NOTIFICATION 1</label>
									</td>
									<td>
										<span class="glyphicon glyphicon-edit update-btn"></span>&nbsp;
										<span class="glyphicon glyphicon-trash delete-btn"></span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="modal-footer ">
						<div class="col-lg-6 col-md-offset-1">
							<button class="btn btn-default doneTemplate" data-dismiss="modal" aria-hidden="true">&nbsp;OK&nbsp;</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Modal add or edit -->
		<div class="modal fade" id="Modal-add_edit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog w800">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
					&times;
					</button>
						<h4 class="modal-title">
							Notification Template
				</h4>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-lg-12 pull-left text-left pt20">
								<label for="title">Notification Title</label>
								<input type="text" class="form-control update_title" name="title" id="" checked="checked" placeholder="Input box for title">
							</div>
						</div>
						<div class="row">
							<div class="col-lg-12 pull-left text-left pt20">
								<label for="title">Notification Content</label>
								<textarea class="form-control update_content" rows="8" cols="80"  placeholder="Input box for content"></textarea>
							</div>
						</div>
						<!--<div class="row">
							<div class="col-lg-12 pull-left text-left pt20">
								<label for="region">Region:</label>
								<select class="region_select" name="region">
								</select>
							</div>
						</div>-->
						<!--<div class="row">
							<div class="col-lg-12 pull-left text-left pt20">
								<label for="title">Notification Description:(Optional)</label>
								<input type="text" class="form-control update_description" name="title" id="" placeholder="Input box for description">
							</div>
						</div>-->
					</div>
					<div class="modal-footer ">
						<div class="col-lg-6 col-md-offset-1">
							<button class="btn btn-default edit_save" data-dismiss="modal" aria-hidden="true">&nbsp;OK&nbsp;</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Modal clients -->
		<div class="modal fade" id="Modal-clients" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
					&times;
					</button>
						<h4 class="modal-title">
					Client(s)
				</h4>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-md-12">
								<input type="text" class="form-control search_clients" placeholder="Search by MBO ID/Name/Email">
							</div>
						</div>
						<div class="row">
							<div class="col-md-12 mt10 text-left">
								<b>Search Results:</b><br />
								<ul class="list-group results_client">
									<!--<li class="list-group-item"><span class="glyphicon glyphicon-plus"></span> 10013 - Mary Lee(test@gmail.com)</li>
									<li class="list-group-item"><span class="glyphicon glyphicon-plus"></span> 10015 - Tom Chan (abc@gmail.com)</li>
									<li class="list-group-item"><span class="glyphicon glyphicon-plus"></span> 10234 - Ben Ho (xyz@gmail.com)</li>-->
								</ul>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12 mt10 text-left">
								<b>Selected Client(s):</b><br />
								<ul class="list-group clients">
									<!--<li class="list-group-item"><span class="glyphicon glyphicon-minus"></span> 10284 - Peter Wong(peter@gmail.com)</li>
									<li class="list-group-item"><span class="glyphicon glyphicon-minus"></span> 10015 - Tom Chan (abc@gmail.com)</li>-->
								</ul>
							</div>
						</div>

					</div>
					<div class="modal-footer ">
						<div class="col-lg-6 col-md-offset-1">
							<button class="btn btn-default doneClient" data-dismiss="modal" aria-hidden="true">&nbsp;Done&nbsp;</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!--SendClass-->
		<div class="modal fade" id="Modal-class" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
					&times;
					</button>
						<h4 class="modal-title">
					Class(es)
				</h4>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-md-7 text-left pt10">
								<b>
								Filter By Location:
								</b>
								<div style="display: inline-block;float: right;">
									<select name="" style="width: 120px;" class="select_location">
										<!--<option value="">The Pulse</option>
										<option value="">Pure Tower</option>-->
									</select>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-7 text-left pt10">
								<b>
								Filter By Class Type:
								</b>
								<div style="display: inline-block; float: right;">
									<select name="" style="width: 120px;" class="select_type">
										<!--<option value="">Yin</option>
										<option value="">cycling</option>-->
									</select>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-7 text-left pt10">
								<b>
								Filter By Teacher:
								</b>
								<div style="display: inline-block;float: right;">
									<select name="" style="width: 120px;" class="select_teacher">
										<!--<option value="">All</option>
										<option value="">Tom</option>
										<option value="">Jack</option>-->
									</select>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-7 text-left pt10">
								<b>
								Filter By Date:
								</b>
								<div style="display: inline-block;float: right;">
									<input type="text" value="" class="form_datetime2 form-control" style="width: 120px;" placeholder="yyyy-mm-dd">
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12 mt10 text-left">
								<b>Filtered Results:</b><br />
								<ul class="list-group results_class">
									<!--<li class="list-group-item"><span class="glyphicon glyphicon-plus"></span> Class Schedule 1</li>
									<li class="list-group-item"><span class="glyphicon glyphicon-plus"></span> Class Schedule 2</li>
									<li class="list-group-item"><span class="glyphicon glyphicon-plus"></span> Class Schedule 3</li>-->
								</ul>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12 mt10 text-left">
								<b>Selected Class(es):</b><br />
								<ul class="list-group classes">
									<!--<li class="list-group-item"><span class="glyphicon glyphicon-minus"></span> Class Schedule 1</li>
									<li class="list-group-item"><span class="glyphicon glyphicon-minus"></span> Class Schedule 2</li>-->
								</ul>
							</div>
						</div>

					</div>
					<div class="modal-footer ">
						<div class="col-lg-6 col-md-offset-1">
							<button class="btn btn-default doneClass" data-dismiss="modal" aria-hidden="true">&nbsp;Done&nbsp;</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--  -->
		<div class="modal fade" id="Modal-message" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
						<h4>Message</h4>
					</div>
					<div class="modal-body">
						
					</div>
				</div>
			</div>
		</div>

		<div class="modal fade" id="Modal-preview" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
						<h4 class="modal-title" id="myModalLabel">Notification Template</h4>
					</div>
					<div class="modal-body">
						<div class="pt20">
							<div class="row">
								<div class="col-lg-4 pull-left text-left">
									<label>Target Region</label>
								</div>
								<div class="col-md-3 text-left">
									<span class='cRegoin'></span>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-4 pull-left text-left pt5">
									<label>Target Sector</label>
								</div>
								<div class="col-md-3 text-left">
									<span class='ccSector'></span>
								</div>
							</div>
							
							<div class="row">
								<div class="col-lg-4 pull-left text-left pt5">
									<label>Target Receivers</label>
								</div>
								<div class="col-md-6 text-left">
									<span class='cReceivers'></span>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-4 pull-left text-left pt5">
									<label>Notification Title</label>
								</div>
								<div class="col-md-3 text-left">
									<span class='cTitle'></span>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-4 pull-left text-left pt5">
									<label>Notification Content</label>
								</div>
								<div class="col-md-3 text-left">
									<span class='cContent'></span>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-4 text-left pt5">
									<b>Target Send Out Date Time:</b>
								</div>
								<div class="col-md-3 text-left">
									<span class='cDateTime'></span>
								</div>
							</div>
							<!-- <div class="row">
								<div class="col-lg-6 pull-left text-left pt5">
									<label>Notification Type</label>
								</div>
								<div class="col-md-3 text-left">
									<span class='cNotificationType'></span>
								</div>
							</div> -->
							<div class="modal-footer">
								<div class="col-lg-12">
									<button  class="btn btn-default pull-left" data-dismiss="modal" aria-hidden="true">&nbsp;Back&nbsp;</button>
									<button class="btn btn-default submit_btn pull-right">&nbsp;Confirm&nbsp;</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
<script type="text/javascript">
	$(function(){
		$.ajax({
			type: 'POST',
			url: 'datatime.php',
			data: {
				},
			dataType: 'JSON',
			cache: false,
			async: false,
			success: function(data) {
				$('#datetime').val(data.data);
			},
		});
	})
	$('#chooseTemplate').change(function() {
			if($(this).prop('checked') == true) {
				$('#Modal-template').modal('show');
				return;
			} else {
				return;
			}
		})
	$('#preview').on('click',function() {
		var	usetemplate=0;
		var title='';
		var contect='';
		var username=$('#username').val();
		if(!username){
			alert('請填寫Client郵箱地址');
			return;
		}
		if($('#chooseTemplate').prop('checked') == true) {
			usetemplate=1;
		} else{
			title=$('#input_title').val();
			contect=$('#input_content').val();
		}
		$.ajax({
			type: 'POST',
			url: 'sendmail.php',
			data: {
					'usetemplate': usetemplate,
					'title': title,
					'contect': contect,
					'username':username
				},
			dataType: 'JSON',
			cache: false,
			async: false,
			success: function(data) {
				console.log(data);
				alert(data.mes);
			},
		});
	})
	$('.update-btn').on('click', function() {
		var str ='';
		str+="<COMPANYLOGO>\r\n"+
			"Dear (client_name),\r\n"+
			"This is to inform you that (accountno) has (amount) outstanding on (datetime).\r\n"+
			"disclaimers :\r\n"+
			"(Department)\r\n"+
			"This is a computer-generated letter \r\n"+
			"To contact us, please call (hotline)\r\n";
		$('#Modal-template').modal('hide');
		$('#Modal-add_edit').modal('show');
		$('.update_title').val('測試郵件');
		$('.update_content').val(str);
//		$('.update_description').val($(this).parent().parent().find('.template_description').text());
	});
</script>

</html>