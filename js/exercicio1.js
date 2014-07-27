function vaibuscarasissues(){
    function GithubRepo(username, reponame){
        GithubRepo.prototype.repo = 'https://api.github.com/repos/'+username+'/'+reponame+'/issues'; 

        GithubRepo.prototype.busca_issues_e_popula_tabela = function(target){
            $.ajax({
                url: this.repo,
                dataType: 'json',
                success: function(issues){
                    $(target).find('td').parent().remove();
                    if( typeof issues == 'string' ){
                        issues = JSON.parse(issues);
                    }
                    $.each(issues, function(){
                        var html = '<tr>';
                        html    += '<td>'+this.number+'</td><td>'+this.title+'</td>';
                        html    += '</tr>'
                        $(target).append(html)
                    });
                },
                error: function(ixi){
                    console.log(ixi);
                    console.log('bugou a ' + this.repo)
                },
            });
        }    
        
    }

    var username = $('#user').val();
    var reponame = $('#reponame').val();
    
    var le_repo = new GithubRepo(username, reponame);
    le_repo.busca_issues_e_popula_tabela("#issuestable");
} 
        

